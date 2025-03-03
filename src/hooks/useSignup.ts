"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ID, account, exception } from "@/lib/appwrite"

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
      await account.create(ID.unique(), email, password, name)
      router.push("/")
    } catch (err) {
      setIsLoading(false)
      setError(exception(err))
    }
  }

  return { isLoading, error, signup }
}