import { UserIcon } from "@heroicons/react/16/solid"
import Image from "next/image"

interface AvatarProps {
  avatar?: string | null
  size?: "xs" | "md" | "lg" | "xl" | "xxl"
  responsive?: string
}

const Avatar = ({ avatar, size = "md", responsive = "" }: AvatarProps) => {
  const avatarSizeClass = {
    xs: "size-9 sm:size-10",
    md: "size-9 sm:size-10",
    lg: "size-9 sm:size-10",
    xl: "size-32 sm:size-32",
    xxl: "size-48"
  }[size]

  const iconClass = {
    xs: "p-0",
    md: "p-1",
    lg: "p-2",
    xl: "p-3",
    xxl: "p-4"
  }[size]

  return avatar ? (
    <Image
      src={avatar}
      width="64"
      height="64"
      className={`${avatarSizeClass} mr-2 p-0 rounded-full object-cover ${responsive}`}
      alt=""
    />
  ) : (
    <UserIcon
      className={`${avatarSizeClass} ${iconClass} mr-2 rounded-full bg-slate-200 text-white flex-shrink-0 ${responsive}`}
    />
  )
}

export default Avatar