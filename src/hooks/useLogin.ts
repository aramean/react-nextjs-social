"use client"

import { account } from "@/lib/appwrite"

interface LoginProps {
  email: string
  password: string
}

export default function Login({email, password} : LoginProps) {
  account.createEmailPasswordSession(email, password)
}