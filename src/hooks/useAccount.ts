"use client"

import { useState } from "react"
import { account, exception } from "@/lib/appwrite"

interface UseAccountResult {
  isLoading: boolean
  error: string | null
  getData: () => Promise<object>
  checkPassword: (password: string) => Promise<void>
  updateName: (name: string) => Promise<void>
  updateEmail: (email: string, password: string) => Promise<void>
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
    setError(null)
    try {
      setIsLoading(true)
      await account.updateName(name)
    } catch (err) {
      setError(exception(err))
    } finally {
      setIsLoading(false)
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

  const checkPassword = async (password: string) => {
    setIsLoading(true)
    setError(null)
    try {
      await account.updatePassword(password, password)
      setIsLoading(false)
    } catch (err) {
      setError(exception(err))
      setIsLoading(false)
    }
  }

  return { isLoading, error, getData, checkPassword, updateName, updateEmail }
}