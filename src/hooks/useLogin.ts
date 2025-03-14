"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { account, exception } from "@/lib/appwrite"

interface UseLoginResult {
  isLoading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<void>
}

export function useLogin(): UseLoginResult {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    setError(null)
    try {
      await account.createEmailPasswordSession(email, password)
      router.push("dashboard")
    } catch (err) {
      setIsLoading(false)
      setError(exception(err))
    }
  }

  return { isLoading, error, login }
}