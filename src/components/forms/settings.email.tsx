"use client"

import { useState } from "react"
import { useAccount } from "@/hooks/useAccount"
import InputText from "@/components/partials/inputText"
import Form from "@/components/partials/form"
import Alert from "@/components/partials/alert"
import Button from "@/components/partials/button"

const SettingsForm = () => {
  const [email, setEmail] = useState("")
  const { isLoading, error, updateEmail } = useAccount()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    return await updateEmail(email, "")
  }

  return (<Form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
    <InputText
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    {error && <Alert message={error} />}
    <Button disabled={isLoading} value="Save" />
  </Form>)
}

export default SettingsForm