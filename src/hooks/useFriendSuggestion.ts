"use client"

import { useEffect, useState } from "react"
import { databases, account, Query } from "@/lib/appwrite"
import { DATABASE, COLLECTION_PROFILE, COLLECTION_FOLLOW } from "@constants"
import { fetchAvatars } from "@/utils/bucket"

interface FriendSuggestionProps {
  userId?: string
  loading: boolean
  dataFriendSuggestion: FriendSuggestionItem[]
}

interface FriendSuggestionItem {
  userId: string | null
  created: string
  firstName: string
  middleName?: string
  lastName: string
  avatarUrl?: string | null
}

export function useFriendSuggestion(userId?: string): FriendSuggestionProps {
  const [dataFriendSuggestion, setData] = useState<FriendSuggestionItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const id = userId ? userId : (await account.get()).$id

        // Fetch all user profiles
        const profileResponse = await databases.listDocuments(
          DATABASE,
          COLLECTION_PROFILE,
          [] // Fetch all profiles
        )

        const userIds = profileResponse?.documents?.map((item) => item.$id)
        const avatarMap = await fetchAvatars(userIds)

        const allUsers: FriendSuggestionItem[] = profileResponse?.documents?.map((item) => ({
          userId: item.$id,
          created: item.$createdAt,
          firstName: item.firstName,
          middleName: item.middleName,
          lastName: item.lastName,
          avatarUrl: avatarMap[item.$id] || null
        }))

        // Fetch users the current user is following
        const followingResponse = await databases.listDocuments(
          DATABASE,
          COLLECTION_FOLLOW, // Collection storing following relationships
          [Query.equal("followerId", id)] // Get users the current user is following
        )

        // Store followed user IDs in a Set
        const followingIds = new Set(followingResponse?.documents?.map((f) => f.followingId))

        // Merge allUsers with profile info after filtering
        const mergedFeed = allUsers
          .filter((item) => !followingIds.has(item.userId)) // Ensure only non-followed users are included
          .map((item) => ({
            ...item,
            userId: item.userId,
            firstName: item.firstName,
            middleName: item.middleName,
            lastName: item.lastName
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

  return { loading, dataFriendSuggestion }
}