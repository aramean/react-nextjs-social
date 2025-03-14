"use client"

import { useAuthCheck } from "@/hooks/useAuthCheck"
import Login from "@pages/public/login"

export default function AuthCheck() {
  const { user, loading } = useAuthCheck()

  if (loading) return <p>Loading...</p>
  return user ? null : <Login />
}