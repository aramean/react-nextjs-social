"use client"

interface PostSkeletonProp {
  repeat?: number
}

export const PostSkeleton = ({ repeat = 1 }: PostSkeletonProp) => {
  return (
    <>
      {Array.from({ length: repeat }).map((_, index) => (
        <div key={index} className="bg-white border border-gray-300 rounded-b p-5 flex flex-col gap-3 animate-pulse mt-3">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-6 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      ))}
    </>
  )
}

export default PostSkeleton