"use client"

import { useEffect, useState } from "react"
import { databases, account, Query } from "@/lib/appwrite"
import { DATABASE, COLLECTION_FEED, COLLECTION_PROFILE } from "@constants"

interface FeedProps {
  userId?: string
  loading: boolean
  data: FeedItem[]
}

interface FeedItem {
  message: string
  userId: string
  created: string
  profile: { firstName: string; lastName: string;[key: string]: unknown } | null // Explicitly define profile structure
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
            [Query.equal("userId", userIds)]
          )

          // Convert profiles array into a Map for fast lookup
          profilesResponse?.documents?.forEach((profile) => {
            profilesMap.set(profile.userId, profile)
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
  }, [])

  return { userId, loading, data }
}