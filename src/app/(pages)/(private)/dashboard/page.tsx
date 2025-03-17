"use client"

import { useState } from "react"
import { formatTimeAgo } from "@/utils/date"
import { useFeed } from "@/hooks/useFeedLoad"
import Card from "@/components/partials/card"
import FormFeed from "@/components/forms/feed"
import PostSkeleton from "@/components/partials/postSkeleton"
import Box from "@/components/partials/box"
import { useFriendSuggestion } from "@/hooks/useFriendSuggestion"

export default function Dashboard() {
  const { loading, data } = useFeed()
  const { dataFriendSuggestion } = useFriendSuggestion()
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
        {loading && <PostSkeleton repeat={7} />}
        {pendingPosts.map((item) => (
          <Card
            key={`pending-${item.createdAt}`}
            title="User"
            titleHref=""
            text={item.message}
            createdAt={formatTimeAgo(item.createdAt.toISOString())}
          />
        ))}
        {data.map((item) => (
          <Card
            key={`post-${item.id}`}
            title={[item.profile?.firstName, item.profile?.middleName, item.profile?.lastName].join(" ") || "..."}
            titleHref="#"
            text={item.message}
            createdAt={formatTimeAgo(item.created)}
          />
        ))}
      </div>

      <div className="w-1/4 p-3 hidden md:block">
        <Box title="People you may know" bare={true}>
          {dataFriendSuggestion.map((item) => (
            <Card
              key={`suggestion-${item.userId}`}
              title={[item.firstName, item.middleName, item.lastName].join(" ") || "..."}
              titleHref={`/profile/${item.userId}`}
              bare={true}
            />
          ))}
        </Box>
      </div>
    </div>
  )
}