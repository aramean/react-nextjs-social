"use client"

import { useState } from "react"
import { formatTimeAgo } from "@/utils/date"
import { useFeed } from "@/hooks/useFeedLoad"
import Card from "@/components/partials/card"
import FormFeed from "@/components/forms/feed"
import PostSkeleton from "@/components/partials/postSkeleton"
import Box from "@/components/partials/box"

export default function Dashboard() {
  const { loading, data } = useFeed()
  const [pendingPosts, setPendingPosts] = useState<{ message: string, createdAt: Date }[]>([])

  return (
    <div className="flex">
      <div className="w-1/4 p-3 hidden md:block">
        <p>Feeds</p>
        * Today
        * Trending
        * Starred
        * Archived
      </div>

      <div className="w-full md:w-2/4 p-3">
        <FormFeed setPendingPosts={setPendingPosts} />
        {loading && <><PostSkeleton /><PostSkeleton /><PostSkeleton /></>}
        {pendingPosts.map((item, key) => (
          <Card
            key={key}
            title="User"
            titleHref=""
            text={item.message}
            createdAt={formatTimeAgo(item.createdAt.toISOString())}
          />
        ))}
        {data.map((item, key) => (
          <Card
            key={key}
            title="User"
            titleHref={`/profile/${item.userId}`}
            text={item.message}
            createdAt={formatTimeAgo(item.created)}
          />
        ))}
      </div>

      <div className="w-1/4 p-3 hidden md:block">
        <Box title="People you may know" bare={true}>
          {data.map((item, key) => (
            <Card
              key={key}
              title="User"
              titleHref={`/profile/${item.userId}`}
              text={item.message}
              bare={true}
              createdAt={formatTimeAgo(item.created)}
            />
          ))}
        </Box>
      </div>
    </div>
  )
}