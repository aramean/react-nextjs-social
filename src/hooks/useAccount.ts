"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { account } from "@/lib/appwrite"

interface UseLoginResult {
  isLoading: boolean
  error: string | null
  updateName: (name: string) => Promise<void>
}

export function useAccount(): UseLoginResult {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const updateName = async (name: string) => {
    setIsLoading(true)
    setError(null)
    try {
      await account.updateName(name)
      router.push("dashboard")
    } catch (err) {
      setIsLoading(false)
      setError("" + err)
    }
  }

  return { isLoading, error, updateName }
}