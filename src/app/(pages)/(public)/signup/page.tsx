"use client"

import { useState } from "react"
import FormSignup from "@/components/forms/signup"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [name, setName] = useState("")

  return (
    <div className="grid grid-rows-[auto_auto_auto] items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-5 row-start-2 bg-slate-50 sm:w-full md:w-full max-w-md p-8 sm:p-12 md:p-12 lg:p-12 rounded-xl shadow-lg">
        <FormSignup
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          password2={password2}
          setPassword2={setPassword2}
        />
      </main>
    </div>
  )
}