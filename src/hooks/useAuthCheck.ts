"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getAuthToken } from "@/utils/auth"

export function useAuthCheck() {
  const [isLoading, setIsLoading] = useState(true)
  const [isLogged, setIsLogged] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = getAuthToken()
    if (token) {
      setIsLogged(true)
      router.push("/dashboard")
    } else {
      router.push("/")
      setIsLogged(false)
    }
    setIsLoading(false)
  }, [router])

  return { isLogged, isLoading }
}