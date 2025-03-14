"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { account } from "@/lib/appwrite"

export function useAuthCheck() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    account
      .get()
      .then(() => router.push("/dashboard"))
      .catch(() => setUser(null))
      .finally(() => setLoading(false))
  }, [router])

  return { user, loading }
}