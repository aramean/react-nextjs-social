"use client"

import { useAccountEmail } from "@/hooks/useAccountEmail"
import InputText from "@/components/partials/inputText"
import Form from "@/components/partials/form"
import Alert from "@/components/partials/alert"
import Button from "@/components/partials/button"

const SettingsForm = () => {
  const { error, isLoading, email, setEmail, updateEmail } = useAccountEmail()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    return await updateEmail(email ?? "", "")
  }

  return (<Form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
    <InputText
      placeholder="Email"
      value={email ?? ""}
      onChange={(e) => setEmail(e.target.value)}
    />
    {error && <Alert message={error} />}
    <Button disabled={isLoading} value="Save" />
  </Form>)
}

export default SettingsForm