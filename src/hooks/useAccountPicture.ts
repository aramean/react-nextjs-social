"use client"

import { useState, useEffect } from "react"
import { account, storage, exception } from "@/lib/appwrite"
import { BUCKET_AVATAR } from "@constants"

interface UseAccountPictureResult {
  isLoading: boolean
  error: string | null
  picture: string | null
  getPicture: () => Promise<string | undefined>
  uploadPicture: (file: File) => Promise<void>
  removePicture: () => Promise<void>
}

export function useAccountPicture(): UseAccountPictureResult {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [picture, setPicture] = useState<string | null>(null)

  // Fetch the profile picture
  const getPicture = async (): Promise<string | undefined> => {
    setIsLoading(true)
    setError(null)
    try {
      const userId = (await account.get()).$id

      // Check if the file exists in Appwrite storage
      await storage.getFile(BUCKET_AVATAR, userId)

      // If the file exists, get the preview URL
      const picture = storage.getFilePreview(BUCKET_AVATAR, userId)
      setPicture(picture)
      return picture
    } catch (err) {
      setError(exception(err))
    } finally {
      setIsLoading(false)
    }
  }

  // Upload a new profile picture
  const uploadPicture = async (file: File): Promise<void> => {
    setIsLoading(true)
    setError(null)
    try {
      const userId = (await account.get()).$id
      await storage.createFile(BUCKET_AVATAR, userId, file)
      await getPicture() // Refresh the picture after uploading
    } catch (err) {
      setError(exception(err))
    } finally {
      setIsLoading(false)
    }
  }

  // Remove the profile picture
  const removePicture = async (): Promise<void> => {
    setIsLoading(true)
    setError(null)
    try {
      const userId = (await account.get()).$id
      await storage.deleteFile(BUCKET_AVATAR, userId)
      setPicture(null) // Clear the preview picture from the state
    } catch (err) {
      setError(exception(err))
    } finally {
      setIsLoading(false)
    }
  }

  // Fetch the picture when the hook is used
  useEffect(() => {
    getPicture() // Automatically fetch picture on mount
  }, []) // Only run once when the component is mounted

  return { isLoading, error, picture, getPicture, uploadPicture, removePicture }
}