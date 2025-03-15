"use client"

import { useEffect, useState } from "react"
import { databases, Query } from "@/lib/appwrite"
import { DATABASE, COLLECTION_PROFILE } from "@constants"

interface ProfileItem {
  sex: string
  created: string
}

interface ProfileProps {
  loadingProfile: boolean
  dataProfile?: ProfileItem
}

export function useProfile(userId: string): ProfileProps {
  const [dataProfile, setDataProfile] = useState<ProfileItem | undefined>(undefined)
  const [loadingProfile, setLoadingProfile] = useState(true)

  useEffect(() => {
    if (!userId) {
      setLoadingProfile(false)
      return
    }

    const fetchData = async () => {
      try {
        const response = await databases.listDocuments(
          DATABASE,
          COLLECTION_PROFILE,
          [Query.equal("userId", userId)]
        )

        const document = response.documents[0]
        const profileItem: ProfileItem | undefined = document ? {
          sex: document.sex,
          created: document.$createdAt
        } : undefined

        setDataProfile(profileItem)
      } catch (error) {
        console.error("Error fetching profile:", error)
      } finally {
        setLoadingProfile(false)
      }
    }

    fetchData()
  }, [userId])

  return { loadingProfile, dataProfile }
}