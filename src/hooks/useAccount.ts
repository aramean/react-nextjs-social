"use client"

import { useState } from "react"
import { account, exception } from "@/lib/appwrite"

interface UseLoginResult {
  isLoading: boolean
  error: string | null
  getData: () => Promise<object>
  updateName: (name: string) => Promise<void>
  updateEmail: (email: string, password: string) => Promise<void>
}

export function useAccount(): UseLoginResult {
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

  return { isLoading, error, getData, updateName, updateEmail }
}