'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation'
import { setAuthToken } from "@/util/cookies";
import FormLogin from "@/app/components/ui/form.signin";
import LinkSignup from "@/app/components/ui/link.signup";

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent) => {
    setIsSubmit(true);
    event.preventDefault();

    try {
      const response = await fetch('api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
 
      if (response.ok) {
        console.log("Login successful")
        setAuthToken();
        router.push('dashboard')
      } else {
        console.error("Login failed")
      }
    } finally {
      setIsSubmit(false);
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-5 row-start-2 items-center p-12 rounded-xl shadow-lg">
        <FormLogin
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isSubmit={isSubmit}
          onSubmit={handleSubmit}
        />
        <LinkSignup />
      </main>
    </div>
  )
}