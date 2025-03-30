"use client"

import { useState, useEffect } from "react"
import { account, exception } from "@/lib/appwrite"

interface UseAccountPictureResult {
  isLoading: boolean
  error: string | null
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  getEmail: () => Promise<string | undefined>
  updateEmail: (email: string, password: string) => Promise<void>
}

export function useAccountEmail(): UseAccountPictureResult {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState<string>("")

  // Fetch the profile picture
  const getEmail = async (): Promise<string | undefined> => {
    setIsLoading(true)
    setError(null)
    try {
      const userEmail = (await account.get()).email
      setEmail(userEmail)
      return userEmail
    } catch (err) {
      setError(exception(err))
    } finally {
      setIsLoading(false)
    }
  }

  // Fetch the picture when the hook is used
  useEffect(() => {
    getEmail() // Automatically fetch picture on mount
  }, []) // Only run once when the component is mounted

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

  return { isLoading, error, email, setEmail, getEmail, updateEmail }
}