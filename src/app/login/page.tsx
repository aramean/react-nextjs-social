'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation'
import { setAuthToken } from "@/util/cookies";
import FormLogin from "@/app/components/ui/form.signin";
import LinkSignup from "@/app/components/ui/link.signup";
import { z } from "zod";

const signInSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
});

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const [formErrors, setFormErrors] = useState<{ email?: string; password?: string }>({});
  const [apiError, setApiError] = useState<string>("");
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmit(true);
    setFormErrors({});
    setApiError("");

    const result = signInSchema.safeParse({ email, password });

    if (!result.success) {
      const validationErrors = result.error.errors.reduce(
        (acc, { path, message }) => ({ ...acc, [path[0]]: message }),
        {}
      );
      setFormErrors(validationErrors);
      setIsSubmit(false);
      return;
    }

    try {
      const response = await fetch('api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (response.ok) {
        setAuthToken();
        router.push('dashboard');
      } else {
        const message = await response.json();
        setApiError(message.response.message);
      }
    } finally {
      setIsSubmit(false);
    }
    return;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-5 row-start-2 bg-slate-50 items-center p-12 rounded-xl shadow-lg">
        <FormLogin
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isSubmit={isSubmit}
          onSubmit={handleSubmit}
          formErrors={formErrors}
          apiError={apiError}
        />
        <LinkSignup />
      </main>
    </div>
  )
}