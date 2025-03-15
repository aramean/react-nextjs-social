"use client"

import { useEffect, useState } from "react"
import { databases, Query } from "@/lib/appwrite"
import { DATABASE, COLLECTION_PROFILE } from "@constants"

interface ProfileItem {
  firstName: string
  middleName: string
  lastName: string
  sex: string
  created: string
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
        const profileItem = document ? {
          firstName: document.firstName || "",
          middleName: document.middleName || "",
          lastName: document.lastName || "",
          sex: document.sex,
          created: document.$createdAt
        } : undefined

        setDataProfile(profileItem)

        // Update the state for first name, middle name, and last name
        if (profileItem) {
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