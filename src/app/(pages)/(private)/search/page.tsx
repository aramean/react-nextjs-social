"use client"

import { Suspense } from "react"
import { formatTimeAgo } from "@/utils/date"
import { useSearch } from "@/hooks/useSearchLoad"
import Card from "@/components/partials/card"
import PostSkeleton from "@/components/partials/postSkeleton"

export default function Search() {
  return (
    <div className="flex">
      <div className="w-1/4 p-3 hidden md:block">
        <p>Left Sidebar</p>
      </div>

      <div className="w-full md:w-2/4 p-3">
        <Suspense>
          <SearchResults />
        </Suspense>
      </div>

      <div className="w-1/4 p-3 hidden md:block">
        <p>Right Sidebar</p>
      </div>
    </div>
  )
}

//Todo: Move the client-side logic to a separate component
function SearchResults() {
  const { loading, data } = useSearch()

  if (loading) {
    return (<PostSkeleton repeat={10} />)
  }

  return (
    <>
      {data.map((item, key) => (
        <Card
          key={key}
          title={item.fullName}
          titleHref={`/profile/${item.userId}`}
          text={item.message}
          createdAt={formatTimeAgo(item.created)}
        />
      ))}
    </>
  )
}