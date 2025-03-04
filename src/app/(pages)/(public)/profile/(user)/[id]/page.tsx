"use client"

import { use } from "react"
import { formatTimeAgo } from "@/utils/date"
import { useFeed } from "@/hooks/useFeedLoad"
import Card from "@/components/partials/card"
import PostSkeleton from "@/components/partials/postSkeleton"

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const { loading, data } = useFeed()

  return (
    <div className="flex">
      <div className="w-1/4 p-3 hidden md:block">
        {id}
      </div>

      <div className="w-full md:w-2/4 p-3">
        {loading && <><PostSkeleton /><PostSkeleton /><PostSkeleton /></>}
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