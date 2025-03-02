"use client"

import Alert from "@/components/partials/alert"
import Box from "@/components/partials/box"
import Button from "@/components/partials/button"
import Sidebar from "@/components/partials/sidebar"
import { useAccount } from "@/hooks/useAccount"

export default function SettingsName() {
  const { isLoading, error, updateName } = useAccount()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    return await updateName("test")
  }

  return (<div className="flex">
    <div className="w-2/5">
      <Sidebar />
    </div>
    <div className="w-3/5">
      <Button value="Back" />Profile information

      <Box title="Name"></Box>

      {error && <Alert message={error} />}
      <button onClick={handleSubmit} disabled={isLoading}>Save</button>
    </div>
  </div>)
}