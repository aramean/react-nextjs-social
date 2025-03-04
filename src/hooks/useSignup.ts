"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ID, account, databases, exception } from "@/lib/appwrite"
import { DATABASE, COLLECTION_PROFILE } from "@constants"

interface UseSignupResult {
  isLoading: boolean
  error: string | null
  signup: (email: string, password: string, name: string) => Promise<void>
}

export function useSignup(): UseSignupResult {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const signup = async (email: string, password: string, name: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const user = await account.create(ID.unique(), email, password, name)

      try {
        await databases.createDocument(DATABASE, COLLECTION_PROFILE, ID.unique(),
          {
            userId: user.$id // Link profile to auth user
          }
        )
        console.log("Profile Created")
      } catch (error) {
        console.error("Error:", error)
      }
      router.push("/")
    } catch (err) {
      setIsLoading(false)
      setError(exception(err))
    }
  }

  return { isLoading, error, signup }
}