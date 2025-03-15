"use client"

import { use } from "react"
import { formatTimeAgo } from "@/utils/date"
import { useFeed } from "@/hooks/useFeedLoad"
import { useProfile } from "@/hooks/useProfileLoad"
import Card from "@/components/partials/card"
import PostSkeleton from "@/components/partials/postSkeleton"
import Box from "@/components/partials/box"
import Br from "@/components/partials/br"

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const { loading, data } = useFeed(id)
  const { loadingProfile, dataProfile } = useProfile(id)

  return (<>
    <div className="bg-slate-300 h-60">
      <div className="max-w-7xl m-auto">
        <Card
          title="User"
          titleHref=""
          text="test"
          bare={true}
        />
      </div></div>
    <div className="max-w-7xl m-auto mt-5">
      <div className="flex">
        <div className="w-1/4 p-3 hidden md:block">
          {loadingProfile && <PostSkeleton />}
          {dataProfile.map((item, key) => (
            <Box key={key}>
              <ul>
                <li>{item.sex}</li>
                <Br />
              <li><b>Member since:</b> {formatTimeAgo(dataProfile?.created)}</li>
              </ul>
            </Box>
          ))}
        </div>

        <div className="w-full md:w-2/4 p-3">
          {loading && <PostSkeleton repeat={5} />}
          {data.map((item, key) => (
            <Card
              key={key}
              title={item.profile?.firstName}
              titleHref="#"
              text={item.message}
              createdAt={formatTimeAgo(item.created)}
            />
          ))}
        </div>

        <div className="w-1/4 p-3 hidden md:block">
          <p>Right Sidebar</p>
        </div>
      </div></div></>
  )
}