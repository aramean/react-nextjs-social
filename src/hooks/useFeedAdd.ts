"use client"

import { useState } from "react"
import { databases, exception, ID } from "@/lib/appwrite"

const database = "67a1f726001f51b0fb86" // posts

interface UseFeedAddResult {
  isLoading: boolean
  error: string | null
  add: (message: string) => Promise<void>
}

export function useFeedAdd(): UseFeedAddResult {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const add = async (message: string) => {
    setIsLoading(true)
    setError(null)
    try {
      await databases.createDocument(database, "67b5d98900395c75f665",
        ID.unique(),
        { userId: "", message }
      )
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      setError(exception(err))
    }
  }

  return { isLoading, error, add }
}