"use client"

import { useState } from "react"
import { useFeedAdd } from "@/hooks/useFeedAdd"
import Alert from "@/components/partials/alert"
import Button from "@/components/partials/button"
import TextArea from "@/components/partials/inputTextArea"

const FormFeed = () => {
  const [message, setMessage] = useState("")
  const { isLoading, error, add } = useFeedAdd()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    return await add(message)
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)} className="flex flex-col bg-slate-50 border-r border-b border-l border-gray-300 lg:border-t lg:border-gray-200 rounded-b p-5 justify-between leading-normal shadow-sm">
      <fieldset className="flex flex-col gap-3" disabled={isLoading}>
        <TextArea
          placeholder="Write a post..."
          height="xl"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button value="Post" />
        {error && <Alert message={error} />}
      </fieldset>
    </form>
  )
}

export default FormFeed