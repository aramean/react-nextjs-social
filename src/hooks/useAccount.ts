"use client"

import { useState } from "react"
import { account, storage, exception } from "@/lib/appwrite"
import { BUCKET_AVATAR } from "@constants"

interface UseAccountResult {
  isLoading: boolean
  error: string | null
  getData: () => Promise<object>
  updateName: (name: string) => Promise<void>
  updateEmail: (email: string, password: string) => Promise<void>
  uploadPicture: (file: File) => Promise<void>
}

export function useAccount(): UseAccountResult {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getData = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const user = await account.get()
      setIsLoading(false)
      return user
    } catch (err) {
      setIsLoading(false)
      setError(exception(err))
      return {}
    }
  }

  const updateName = async (name: string) => {
    setIsLoading(true)
    setError(null)
    try {
      await account.updateName(name)
    } catch (err) {
      setIsLoading(false)
      setError(exception(err))
    }
  }

  const updateEmail = async (email: string, password: string) => {
    setIsLoading(true)
    setError(null)
    try {
      await account.updateEmail(email, password)
    } catch (err) {
      setIsLoading(false)
      setError(exception(err))
    }
  }

  const uploadPicture = async (file: File): Promise<void> => {
    setIsLoading(true)
    setError(null)
    try {
      const userId = (await account.get()).$id
      await storage.createFile(BUCKET_AVATAR, userId, file)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      setError(exception(err))
    }
  }

  return { isLoading, error, getData, updateName, updateEmail, uploadPicture }
}