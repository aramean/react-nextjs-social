"use client"

import { useState } from "react"
import Card from "@/components/partials/card"
import FormFeed from "@/components/form.feed"
import { useFeed } from "@/hooks/useFeed"
import { formatTimeAgo } from "@/utils/date"
import ApiFetch from "@/lib/apiFetch"

export default function Dashboard() {
  const [message, setMessage] = useState("")
  const { loading, data } = useFeed()
  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const [apiError, setApiError] = useState<string>("")

  const handleSubmit = async (event: React.FormEvent) => {
    setApiError("")
    setIsSubmit(true)
    event.preventDefault()
    try {
      const response = await ApiFetch("POST", "feed", { "message": message })

      if (response.ok) {
        setMessage("")
      } else {
        const message = await response.json()
        setApiError(message.response.message)
      }
    } finally {
      setIsSubmit(false)
    }
    return
  }

  if (loading) return <p>Loading...</p>

  return (
    <div className="flex">
      <div className="w-1/4 p-3">
        <p>Left Sidebar</p>
      </div>

      <div className="w-2/4 px-5">
        <FormFeed
          message={message}
          setMessage={setMessage}
          isSubmit={isSubmit}
          onSubmit={handleSubmit}
          apiError={apiError}
        />
        {data.map((item, key) => (
          <Card key={key} text={item.message} createdAt={formatTimeAgo(item.created)} />
        ))}
      </div>

      <div className="w-1/4 p-3">
        <p>Right Sidebar</p>
      </div>
    </div>
  )
}