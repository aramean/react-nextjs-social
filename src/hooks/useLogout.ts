import { useState } from "react"
import { useRouter } from "next/navigation"
import { account } from "@/lib/appwrite"

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
      setIsLoading(false)
      setError("Failed to logout. " + err)
    }
  }

  return { isLoading, error, logout }
}