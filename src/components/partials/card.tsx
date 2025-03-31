"use client"

import { UserIcon, LockClosedIcon, EllipsisHorizontalIcon } from "@heroicons/react/16/solid"
import Link from "next/link"
import Image from "next/image"
import Box from "./box"
import Button from "./button"
import Hr from "./hr"

interface CardProps {
  picture?: string
  title?: string
  titleHref?: string
  avatar?: string | null
  avatarSize?: "xs" | "md" | "lg" | "xl" | "xxl"
  menu?: boolean
  text?: string
  lock?: boolean
  hr?: "xs" | "md" | "lg" | "xl"
  controls?: boolean
  bare?: boolean
  createdAt?: string
}

const Card = ({ picture = "", title = "", titleHref = "", avatar, avatarSize = "md", menu = false, text = "", lock = true, hr, controls = false, bare = false, createdAt }: CardProps) => {
  const avatarSizeClass = {
    xs: "size-9 sm:size-10",
    md: "size-9 sm:size-10",
    lg: "size-9 sm:size-10",
    xl: "size-32 sm:size-32",
    xxl: "size-48"
  }[avatarSize]

  const iconClass = {
    xs: "p-0",
    md: "p-1",
    lg: "p-2",
    xl: "p-2",
    xxl: "p-3"
  }[avatarSize]

  return (<div className={`width-full rounded-md ${bare ? "" : "bg-white"}`}>
    {picture && (
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title="."
        style={{ backgroundImage: `url(${picture})` }}
      />
    )}
    <Box bare={bare}>
      <div className="flex flex-row flex-shrink-0">
        {avatar ? <Image src={avatar} width="64" height="64" className={`${avatarSizeClass} mr-2 p-0 rounded-full object-cover`} alt="" /> : <UserIcon className={`${avatarSizeClass} ${iconClass} mr-2 p-1 rounded-full bg-slate-200 text-white flex-shrink-0`} />}
        <div className="text-sm w-full mt-0 sm:mt-1 flex flex-col">
          <p className="text-gray-900">
            {titleHref ? <Link href={titleHref}>{title}</Link> : title}
          </p>
          <p className="text-gray-600 text-xs">{createdAt}{lock && <> • <LockClosedIcon className='mr-1 w-3 inline-flex' /></>}</p>
        </div>
        {menu && <p className="text-sm text-gray-600 flex place-items-start">
          <EllipsisHorizontalIcon className='w-5' />
        </p>}
      </div>
      {text && <div className="mt-2">
        <p className="text-gray-700 text-base">{text}</p>
      </div>}
      {controls && <div className="flex flex-row gap-3 mt-2">
        <Button value="Add friend" size="xs"></Button>
        <Button value="Remove" outlined={true} size="xs"></Button>
      </div>}
    </Box>
    {hr && <Hr size={hr} />}
  </div>)
}

export default Card