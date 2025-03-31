"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { account, exception } from "@/lib/appwrite"

interface UseLogoutResult {
  isLoading: boolean
  error: string | null
  logout: () => Promise<void>
}

export function useLogout(): UseLogoutResult {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const logout = async () => {
    setIsLoading(true)
    setError(null)
    try {
      await account.deleteSession("current")
      router.push("/")
    } catch (err) {
      setError(exception(err))
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, error, logout }
}