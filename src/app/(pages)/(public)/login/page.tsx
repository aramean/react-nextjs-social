"use client"

import FormLogin from "@/components/forms/signin"

export default function Login() {
  return (
    <div className="grid grid-rows-[auto_auto_auto] items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-5 row-start-2 bg-slate-50 sm:w-full md:w-full max-w-md p-8 sm:p-12 md:p-12 lg:p-12 rounded-xl shadow-none xs:shadow-lg">
        <FormLogin />
      </main>
    </div>
  )
}