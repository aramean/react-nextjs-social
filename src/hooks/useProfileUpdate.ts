import { useState } from "react"
import { databases } from "@/lib/appwrite"
import { DATABASE, COLLECTION_PROFILE } from "@constants"

interface ProfileUpdateProps {
  isUpdating: boolean
  updateProfile: (data: { firstName: string; middleName: string; lastName: string }) => Promise<void>
}

export function useProfileUpdate(userId: string): ProfileUpdateProps {
  const [isUpdating, setIsUpdating] = useState(false)

  const updateProfile = async ({ firstName, middleName, lastName }: { firstName: string; middleName: string; lastName: string }) => {
    setIsUpdating(true)
    try {
      console.log(userId)
      await databases.updateDocument(DATABASE, COLLECTION_PROFILE, userId, {
        firstName,
        middleName,
        lastName
      })
    } catch (error) {
      console.error("Error updating profile:", error)
    } finally {
      setIsUpdating(false)
    }
  }

  return { isUpdating, updateProfile }
}