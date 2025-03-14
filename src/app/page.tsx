"use client"

import { useAuthCheck } from "@/hooks/useAuthCheck"
import Login from "@pages/public/login"

export default function AuthCheck() {
  const { isLogged, isLoading } = useAuthCheck()
  return isLogged ? null : !isLoading && <Login />
}