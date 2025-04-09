"use client"

import { useEffect, useState } from "react"
import { databases } from "@/lib/appwrite"
import { DATABASE, COLLECTION_PROFILE } from "@constants"
import { fetchAvatars } from "@/utils/bucket"

interface ProfileItem {
  firstName: string
  middleName: string
  lastName: string
  sex: string
  created: string
  picture: string
}

interface ProfileProps {
  loadingProfile: boolean
  dataProfile?: ProfileItem
  firstName: string
  middleName: string
  lastName: string
  setFirstName: React.Dispatch<React.SetStateAction<string>>
  setMiddleName: React.Dispatch<React.SetStateAction<string>>
  setLastName: React.Dispatch<React.SetStateAction<string>>
}

export function useProfile(userId: string): ProfileProps {
  const [dataProfile, setDataProfile] = useState<ProfileItem | undefined>(undefined)
  const [loadingProfile, setLoadingProfile] = useState(true)

  const [firstName, setFirstName] = useState<string>("")
  const [middleName, setMiddleName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await databases.getDocument(
          DATABASE,
          COLLECTION_PROFILE,
          userId
        )

        const avatarMap = await fetchAvatars([userId])
        const data = response
        const profileItem = data ? {
          firstName: data.firstName || "",
          middleName: data.middleName || "",
          lastName: data.lastName || "",
          sex: data.sex,
          created: data.$createdAt,
          picture: avatarMap[userId] || ""
        } : undefined

        if (profileItem) {
          setDataProfile(profileItem)
          setFirstName(profileItem.firstName)
          setMiddleName(profileItem.middleName)
          setLastName(profileItem.lastName)
        }

      } catch (error) {
        console.error("Error fetching profile:", error)
      } finally {
        setLoadingProfile(false)
      }
    }

    fetchData()
  }, [userId])

  return {
    loadingProfile,
    dataProfile,
    firstName,
    middleName,
    lastName,
    setFirstName,
    setMiddleName,
    setLastName
  }
}