"use client"

import { LockClosedIcon, EllipsisHorizontalIcon } from "@heroicons/react/16/solid"
import Link from "next/link"
import Box from "./box"
import Button from "./button"
import Hr from "./hr"
import Avatar from "./avatar"

interface CardProps {
  picture?: string
  title?: string
  titleHref?: string
  avatar?: string | null
  avatarSize?: "xs" | "md" | "lg" | "xl" | "xxl"
  avatarInfo?: string
  avatarResponsive?: string
  menu?: boolean
  text?: string
  lock?: boolean
  hr?: "xs" | "md" | "lg" | "xl"
  controls?: boolean
  bare?: boolean
  createdAt?: string
}

const Card = ({ picture = "", title = "", titleHref = "", avatar, avatarInfo = "", avatarSize = "md", avatarResponsive = "", menu = false, text = "", lock = true, hr, controls = false, bare = false, createdAt }: CardProps) => {
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
        <Avatar avatar={avatar} info={avatarInfo} size={avatarSize} responsive={avatarResponsive} />
        {title && <div className="text-sm w-full mt-0 sm:mt-1 flex flex-col">
          <p className="text-gray-900">
            {titleHref ? <Link href={titleHref}>{title}</Link> : title}
          </p>
          <p className="text-gray-600 text-xs">{createdAt}{lock && <> • <LockClosedIcon className="mr-1 w-3 inline-flex" /></>}</p>
        </div>}
        {menu && <p className="text-sm text-gray-600 flex place-items-start">
          <EllipsisHorizontalIcon className="w-5" />
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