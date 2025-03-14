"use client"

import Heading from "@/components/partials/heading"

interface BoxProps {
  title?: string
  direction?: "col" | "row"
  bare?: boolean
  children: React.ReactNode
}

const Box = ({ title, direction = "col", bare = false, children }: BoxProps) => {
  return (
    <div className={`${bare ? "" : "flex flex-col bg-white border-r border-b border-l border-gray-200 rounded-b p-5 justify-between shadow-sm mt-3"}`}>
      <div className={`flex flex-${direction}`}>
        {title && <Heading text={title} size="sm" weight="bold"></Heading>}
        {children}
      </div>
    </div>
  )
}

export default Box