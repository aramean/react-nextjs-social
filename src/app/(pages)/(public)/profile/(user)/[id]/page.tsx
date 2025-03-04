"use client"

import { use } from "react"
import { formatTimeAgo } from "@/utils/date"
import { useFeed } from "@/hooks/useFeedLoad"
import { useProfile } from "@/hooks/useProfileLoad"
import Card from "@/components/partials/card"
import PostSkeleton from "@/components/partials/postSkeleton"

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const { loading, data } = useFeed()
  const { loadingProfile, dataProfile } = useProfile(id)

  return (
    <div className="flex">
      <div className="w-1/4 p-3 hidden md:block">
        {loadingProfile && <><PostSkeleton /></>}
        {dataProfile.map((item, key) => (
          <Card
            key={key}
            text={item.sex}
            createdAt={formatTimeAgo(item.created)}
          />
        ))}
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