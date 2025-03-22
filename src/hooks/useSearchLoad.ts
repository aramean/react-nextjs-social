"use client"

import { useEffect, useState, useMemo } from "react"
import { databases, Query } from "@/lib/appwrite"
import { fetchAvatars } from "@/utils/bucket"
import { DATABASE, COLLECTION_PROFILE } from "@constants"
import { useSearchParams } from "next/navigation"

interface ProfileItem {
  message: string
  userId: string
  fullName: string
  avatarUrl?: string | null
  created: string
}

export function useSearch() {
  const [data, setData] = useState<ProfileItem[]>([])
  const [loading, setLoading] = useState(true)
  const searchParams = useSearchParams()

  const search = searchParams.get("q") || ""
  // Memoize nameParts to avoid unnecessary splits on every render
  const nameParts = useMemo(() => search.trim().split(/\s+/), [search])

  useEffect(() => {
    if (nameParts.length > 0) {
      async function fetchData() {
        try {
          const response = await databases.listDocuments(
            DATABASE,
            COLLECTION_PROFILE,
            [
              Query.contains("firstName", nameParts[0]),
              Query.orderDesc("$createdAt")
            ]
          )

          const userIds = response?.documents?.map((item) => item.$id)
          const avatarMap = await fetchAvatars(userIds)

          // Map profiles
          const profileItems: ProfileItem[] = response?.documents?.map((item) => ({
            message: item.message,
            userId: item.$id,
            fullName: [item.firstName, item.middleName, item.lastName].filter(Boolean).join(" "),
            avatarUrl: avatarMap[item.$id] || null,
            created: item.$createdAt
          }))

          setData(profileItems)
        } catch (error) {
          console.error("Error fetching feeds:", error)
        } finally {
          setLoading(false)
        }
      }

      fetchData()
    }
  }, [nameParts])

  return { loading, data }
}