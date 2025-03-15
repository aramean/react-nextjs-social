"use client"

import { useState } from "react"
import { useAccount } from "@/hooks/useAccount"
import InputText from "@/components/partials/inputText"
import Form from "@/components/partials/form"
import Alert from "@/components/partials/alert"
import Button from "@/components/partials/button"

const SettingsFormName = () => {
  const [firstName, setFirstName] = useState("")
  const [middleName, setMiddleName] = useState("")
  const [lastName, setLastName] = useState("")
  const { isLoading, error, updateName } = useAccount()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    return await updateName(firstName)
  }

  return (<Form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
    <InputText
      placeholder="First Name"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
    />
    <InputText
      placeholder="Middle Name"
      value={middleName}
      onChange={(e) => setMiddleName(e.target.value)}
    />
    <InputText
      placeholder="Last Name"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
    />
    {error && <Alert message={error} />}
    <Button disabled={isLoading} value="Save" />
  </Form>
  )
}

export default SettingsFormName