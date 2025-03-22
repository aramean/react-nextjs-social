"use client"

import { useEffect, useState } from "react"
import { databases, account, Query } from "@/lib/appwrite"
import { DATABASE, COLLECTION_FEED, COLLECTION_PROFILE } from "@constants"
import { fetchAvatars } from "@/utils/bucket"

interface FeedProps {
  userId?: string
  loading: boolean
  data: FeedItem[]
}

interface FeedItem {
  id: string
  message: string
  userId: string
  created: string
  profile: {
    firstName: string
    lastName: string;[key: string]: unknown
    avatarUrl: string | null
  } | null
}

export function useFeed(userId?: string): FeedProps {
  const [data, setData] = useState<FeedItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {

        const id = userId ? userId : (await account.get()).$id

        // Fetch feed items for the current user
        const response = await databases.listDocuments(
          DATABASE,
          COLLECTION_FEED,
          [
            Query.equal("userId", id),
            Query.orderDesc("$createdAt")
          ]
        )

        const feedItems: FeedItem[] = response?.documents?.map((item) => ({
          id: item.$id,
          message: item.message,
          userId: item.userId,
          created: item.$createdAt,
          profile: null // Initialize profile as null
        }))

        // Extract unique userIds from feedItems
        const userIds = [...new Set(feedItems.map((item) => item.userId))] // Removes duplicates

        const profilesMap = new Map() // Map to store profiles by userId

        if (userIds.length > 0) {
          // Fetch user profiles for those userIds
          const profilesResponse = await databases.listDocuments(
            DATABASE,
            COLLECTION_PROFILE,
            [Query.equal("$id", userIds)]
          )

          const avatarMap = await fetchAvatars(userIds)

          // Convert profiles array into a Map for fast lookup
          profilesResponse?.documents?.forEach((profile) => {
            const avatarUrl = avatarMap[profile.$id] || null
            profilesMap.set(profile.$id, {
              ...profile,
              avatarUrl
            })
          })
        }

        // Merge feedItems with profile info
        const mergedFeed = feedItems.map((item) => ({
          ...item,
          profile: profilesMap.get(item.userId) || null // Attach profile if found
        }))

        console.log("Merged Feed:", mergedFeed)

        setData(mergedFeed)
      } catch (error) {
        console.error("Error fetching feeds:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [userId])

  return { userId, loading, data }
}