"use client"

import { use } from "react"
import { formatTimeAgo } from "@/utils/date"
import { useFeed } from "@/hooks/useFeedLoad"
import { useProfile } from "@/hooks/useProfileLoad"
import Card from "@/components/partials/card"
import PostSkeleton from "@/components/partials/postSkeleton"
import Box from "@/components/partials/box"
import Br from "@/components/partials/br"
import UserIcon from "@/components/partials/icons/user"
import IconNoPosts from "@/components/partials/icons/noposts"

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const { loading, data } = useFeed(id)
  const { loadingProfile, dataProfile } = useProfile(id)
  const fullName = [dataProfile?.firstName, dataProfile?.middleName, dataProfile?.lastName].filter(Boolean).join(" ")

  return (<>
    <div className="bg-slate-100 h-32 sm:h-36 w-full static border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl m-auto">
        <div className="m-auto absolute mt-4 ml-5 sm:mt-12 sm:ml-24">
          <Card
            avatar={dataProfile?.picture}
            avatarSize="lg"
            avatarResponsive="sm:items-center sm:size-32"
            avatarInfo={fullName}
            titleHref=""
            lock={false}
            bare={true}
          />
        </div>
      </div>
    </div>
    <div className="max-w-7xl m-auto mt-5">
      <div className="flex">
        <div className="w-1/4 p-3 hidden md:block">
          {loadingProfile && <PostSkeleton />}
          <Box>
            <ul>
              <li className="flex flex-row gap-1"><UserIcon size="16" />{dataProfile?.sex}</li>
              <Br />
              <li><b>Member since:</b> {formatTimeAgo(dataProfile?.created)}</li>
            </ul>
          </Box>
        </div>

        <div className="w-full md:w-2/4 p-3">
          {data.length > 0 ? (
            <>
              {loading && <PostSkeleton repeat={5} />}
              {data.map((item, key) => (
                <Card
                  key={key}
                  title={[item.profile?.firstName, item.profile?.middleName, item.profile?.lastName].join(" ") || "..."}
                  titleHref="#"
                  avatar={item.profile?.avatarUrl}
                  text={item.message}
                  createdAt={formatTimeAgo(item.created)}
                />
              ))}
            </>
          ) : !loading ? (
            <div className="flex flex-col text-center text-2xl place-items-center gap-3 mt-5">
              <IconNoPosts />
              No Posts Yet
            </div>
          ) : null}
        </div>

        <div className="w-1/4 p-3 hidden md:block">
          <p>Right Sidebar</p>
        </div>
      </div></div></>
  )
}