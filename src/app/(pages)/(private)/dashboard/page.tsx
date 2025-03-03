"use client"

import { useState } from "react"
import { formatTimeAgo } from "@/utils/date"
import { useFeed } from "@/hooks/useFeedLoad"
import Card from "@/components/partials/card"
import FormFeed from "@/components/form.feed"
import PostSkeleton from "@/components/partials/postSkeleton"

export default function Dashboard() {
  const { loading, data } = useFeed()
  const [pendingPosts, setPendingPosts] = useState<{ message: string, createdAt: Date }[]>([])

  return (
    <div className="flex">
      <div className="w-1/4 p-3 hidden md:block">
        <p>Left Sidebar</p>
      </div>

      <div className="w-full sm-w-2/4 px-5">
        <FormFeed setPendingPosts={setPendingPosts} />
        {loading && <><PostSkeleton /><PostSkeleton /><PostSkeleton /></>}
        {pendingPosts.map((item, key) => (
          <Card
            key={key}
            text={item.message}
            createdAt={formatTimeAgo(item.createdAt.toISOString())}
          />
        ))}
        {data.map((item, key) => (
          <Card
            key={key}
            text={item.message}
            createdAt={formatTimeAgo(item.created)}
          />
        ))}
      </div>

      <div className="w-1/4 p-3 hidden md:block">
        <p>Right Sidebar</p>
      </div>
    </div>
  )
}