"use client"

import { useEffect, useState } from "react"
import { databases, Query } from "@/lib/appwrite"
import { DATABASE, COLLECTION_PROFILE } from "@constants"

interface ProfileItem {
  sex: string
  created: string
}

interface ProfileProps {
  userId: string
  loadingProfile: boolean
  dataProfile: ProfileItem[]
}

export function useProfile(userId: string): ProfileProps {
  const [dataProfile, setDataProfile] = useState<ProfileItem[]>([])
  const [loadingProfile, setLoadingProfile] = useState(true)

  useEffect(() => {
    async function fetchData() {
      if (!userId) {
        setLoadingProfile(false)
        return
      }

      try {
        const response = await databases.listDocuments(
          DATABASE,
          COLLECTION_PROFILE,
          [
            Query.equal("userId", userId)
          ]
        )

        const profileItems: ProfileItem[] = response?.documents?.map((item) => ({
          sex: item.sex,
          created: item.$createdAt
        }))

        setDataProfile(profileItems)
      } catch (error) {
        console.error("Error fetching feeds:", error)
      } finally {
        setLoadingProfile(false)
      }
    }

    fetchData()
  }, [userId])

  return { userId, loadingProfile, dataProfile }
}