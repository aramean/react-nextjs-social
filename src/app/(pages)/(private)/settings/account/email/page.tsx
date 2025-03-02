"use client"

import SettingsForm from "@/components/forms/settings.email"
import Alert from "@/components/partials/alert"
import Box from "@/components/partials/box"
import Button from "@/components/partials/button"
import Sidebar from "@/components/partials/sidebar"
import { useAccount } from "@/hooks/useAccount"

export default function SettingsName() {
  const { isLoading, error, updateEmail } = useAccount()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    return await updateEmail("test", "test")
  }

  return (<div className="flex">
    <div className="w-2/5">
      <Sidebar />
    </div>
    <div className="w-3/5">
      <Button value="Back" />Profile information

      <Box>
        <SettingsForm />
      </Box>

      {error && <Alert message={error} />}
      <button onClick={handleSubmit} disabled={isLoading}>Save</button>
    </div>
  </div>)
}