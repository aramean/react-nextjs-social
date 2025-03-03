"use client"

import { formatTimeAgo } from "@/utils/date"
import { useFeed } from "@/hooks/useFeedLoad"
import Card from "@/components/partials/card"
import FormFeed from "@/components/form.feed"
import Skeleton from "@/components/partials/skeleton"

export default function Dashboard() {
  const { loading, data } = useFeed()

  return (
    <div className="flex">
      <div className="w-1/4 p-3">
        <p>Left Sidebar</p>
      </div>

      <div className="w-2/4 px-5">
        <FormFeed />
        {loading && <><Skeleton /><Skeleton /><Skeleton /></>}
        {data.map((item, key) => (
          <Card
            key={key}
            text={item.message}
            createdAt={formatTimeAgo(item.created)}
          />
        ))}
      </div>

      <div className="w-1/4 p-3">
        <p>Right Sidebar</p>
      </div>
    </div>
  )
}