"use client"

import { useState } from "react"
import { useAccount } from "@/hooks/useAccount"
import Form from "@/components/partials/form"
import Alert from "@/components/partials/alert"
import Button from "@/components/partials/button"

const SettingsFormPicture = () => {
  const [file, setFile] = useState<File | null>(null)
  const { isLoading, error, uploadPicture } = useAccount()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0])
    }
  }

  const handleFileSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (file) {
      await uploadPicture(file)
    }
  }

  return (
    <Form onSubmit={handleFileSubmit} className="flex flex-col w-full gap-4">
      <input
        type="file"
        onChange={handleFileChange}
        className="border p-2 rounded"
      />
      {error && <Alert message={error} />}
      <Button disabled={isLoading} value="Upload Picture" />
    </Form>
  )
}

export default SettingsFormPicture