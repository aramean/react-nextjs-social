"use client"

import { useState } from "react"
import { useAccount } from "@/hooks/useAccount"
import InputText from "@/components/partials/inputText"
import Form from "@/components/partials/form"
import Alert from "@/components/partials/alert"
import Button from "@/components/partials/button"

const SettingsFormName = () => {
  const [name, setName] = useState("")
  const { isLoading, error, updateName } = useAccount()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    return await updateName(name)
  }

  return (<Form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
    <InputText
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    {error && <Alert message={error} />}
    <Button disabled={isLoading} value="Save" />
  </Form>
  )
}

export default SettingsFormName