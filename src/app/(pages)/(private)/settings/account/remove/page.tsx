"use client"

import SettingsForm from "@/components/forms/settings.name"
import Alert from "@/components/partials/alert"
import { useAccount } from "@/hooks/useAccount"

export default function SettingsName() {
  const { isLoading, error, updateName } = useAccount()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    return await updateName("test")
  }

  return (<div className="flex">
    <SettingsForm />
    {error && <Alert message={error} />}
    <button onClick={handleSubmit} disabled={isLoading}>Remove my account</button>
  </div>
  )
}