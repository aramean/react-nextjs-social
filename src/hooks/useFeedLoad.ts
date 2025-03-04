"use client"

import { useEffect, useState } from "react"
import { databases, Query } from "@/lib/appwrite"
import { DATABASE, COLLECTION_FEED } from "@constants"

interface FeedItem {
  message: string
  created: string
}

export function useFeed() {
  const [data, setData] = useState<FeedItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await databases.listDocuments(
          DATABASE,
          COLLECTION_FEED,
          [
            Query.orderDesc("$createdAt")
          ]
        )

        const feedItems: FeedItem[] = response?.documents?.map((item) => ({
          message: item.message,
          created: item.$createdAt
        }))

        setData(feedItems)
      } catch (error) {
        console.error("Error fetching feeds:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { loading, data }
}