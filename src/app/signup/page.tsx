'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation'
import FormSignup from "@/app/components/ui/form.signup";
import { z } from "zod";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const [formErrors, setFormErrors] = useState<{ email?: string; password?: string }>({});
  const [apiError, setApiError] = useState<string>("");
  const router = useRouter();

  const signInSchema = z.object({
    name: z
      .string()
      .nonempty("Name is required"),
    email: z
      .string()
      .email("Invalid email address")
      .nonempty("Email is required"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .nonempty("Password is required"),
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmit(true);
    setFormErrors({});
    setApiError("");

    const result = signInSchema.safeParse({ name, email, password });

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
      const response = await fetch('api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });

      if (response.ok) {
        console.log("Account created successfully");
        router.push('login');
      } else {
        console.log("Login failed");
      }
    } finally {
      setIsSubmit(false);
    }
    return;
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-5 row-start-2 bg-slate-50 sm:w-96 md:w-full max-w-md items-center p-12 rounded-xl shadow-lg">
        <FormSignup
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          password2={password2}
          setPassword2={setPassword2}
          isSubmit={isSubmit}
          onSubmit={handleSubmit}
          formErrors={formErrors}
          apiError={apiError}
        />
      </main>
    </div>
  );
};