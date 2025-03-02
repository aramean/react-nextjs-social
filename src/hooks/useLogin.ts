import { useState } from "react"
import { useRouter } from "next/navigation"
import { account } from "@/lib/appwrite"

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
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      setError("Failed to log in. Please check your credentials. " + err)
    }
  }

  return { isLoading, error, login }
}