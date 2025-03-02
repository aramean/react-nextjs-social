"use client"

import { useState } from "react"
import FormLogin from "@/components/ui/form.signin"
import LinkSignup from "@/components/ui/link.signup"

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("") 

  return (
    <div className="grid grid-rows-[auto_auto_auto] items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-5 row-start-2 bg-slate-50 sm:w-full md:w-full max-w-md p-8 sm:p-12 md:p-12 lg:p-12 rounded-xl shadow-lg">
        <FormLogin
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <LinkSignup />
      </main>
    </div>
  )
}