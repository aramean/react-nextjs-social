'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation'
import FormSignup from "@/app/components/ui/form.signup";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

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
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-5 row-start-2 items-center sm:items-start min-w-80">
        <FormSignup
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          password2={password2}
          setPassword2={setPassword2}
          onSubmit={handleSubmit}
        />
      </main>
    </div>
  );
}