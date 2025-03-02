"use client"

import Card from "@/components/partials/card"
import FormFeed from "@/components/form.feed"
import { useFeed } from "@/hooks/useFeedLoad"
import { formatTimeAgo } from "@/utils/date"

export default function Dashboard() {
  const { loading, data } = useFeed()

  if (loading) return <p>Loading...</p>

  return (
    <div className="flex">
      <div className="w-1/4 p-3">
        <p>Left Sidebar</p>
      </div>

      <div className="w-2/4 px-5">
        <FormFeed />
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