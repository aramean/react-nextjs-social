"use client"

import { useState } from "react"
import Card from "@/app/components/ui/partials/card"
import FormShare from "@/app/components/ui/form.post"
import { useFeeds } from "@/hooks/useFeeds"
import { formatTimeAgo } from "@/util/date"

export default function Dashboard() {
  const { loading, data } = useFeeds()
  const [apiError, setApiError] = useState<string>("")

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setApiError("")

    try {
      const response = await fetch("api/feed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ "test": "test" })
      })

      if (response.ok) {
      } else {
        const message = await response.json()
        setApiError(message.response.message)
      }
    } finally {
      //setIsSubmit(false);
    }
    return
  }

  if (loading) return <p>Loading...</p>

  return (
    <div className="flex">
      <div className="w-1/4 p-3">
        <p>Left Sidebar</p>
      </div>

      <div className="w-2/4 bg-white p-4">
        <FormShare onSubmit={handleSubmit} apiError={apiError} />
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