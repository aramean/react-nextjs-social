"use client"

import { useState } from "react"
import { databases, exception, ID } from "@/lib/appwrite"
import { DATABASE, COLLECTION_FEED } from "@constants"

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
      await databases.createDocument(DATABASE, COLLECTION_FEED,
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