"use client"

import { UserIcon, LockClosedIcon, EllipsisHorizontalIcon } from "@heroicons/react/16/solid"
import Link from "next/link"
import Box from "./box"

interface CardProps {
  picture?: string
  title?: string
  titleHref?: string
  text?: string
  bare?: boolean
  createdAt?: string
}

const Card = ({ picture = "", title = "", titleHref = "", text = "", bare = false, createdAt }: CardProps) => {
  return (<div className={`width-full rounded-md ${bare ? "" : "bg-white"}`}>
    {picture && (
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title="."
        style={{ backgroundImage: `url(${picture})` }}
      />
    )}
    <Box bare={bare}>
      <div className="flex">
        <UserIcon className="w-11 h-10 mr-2 mb-1 p-1 rounded-full bg-slate-200 text-white" />
        <div className="text-sm w-full mt-2 flex flex-col">
          <p className="text-gray-900 leading-none">
            {titleHref ? <Link href={titleHref}>{title}</Link> : title}
          </p>
          <p className="text-gray-600 text-xs">{createdAt} * <LockClosedIcon className='mr-1 w-3 inline-flex' /></p>
        </div>
        <p className="text-sm text-gray-600 flex place-items-start">
          <EllipsisHorizontalIcon className='w-5' />
        </p>
      </div>
      <div className="mb-1">
        <p className="text-gray-700 text-base">{text}</p>
      </div>
    </Box>
  </div>)
}

export default Card