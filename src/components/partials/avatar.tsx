import { UserIcon } from "@heroicons/react/16/solid"
import Image from "next/image"

interface AvatarProps {
  avatar?: string | null
  size?: "xs" | "md" | "lg" | "xl" | "xxl"
  info?: string
  responsive?: string
}

const Avatar = ({ avatar, size = "md", info = "", responsive = "" }: AvatarProps) => {
  const avatarSizeClass = {
    xs: "size-9",
    md: "size-9",
    lg: "size-24",
    xl: "size-32",
    xxl: "size-48"
  }[size]

  const iconClass = {
    xs: "p-0",
    md: "p-1",
    lg: "p-2",
    xl: "p-3",
    xxl: "p-4"
  }[size]

  return (
    <>
      {avatar ? (
        <Image
          src={avatar}
          width="64"
          height="64"
          className={`${avatarSizeClass} mr-2 p-0 rounded-full object-cover ${responsive} border-solid border-2 border-white`}
          alt=""
        />
      ) : (
        <UserIcon
          className={`${avatarSizeClass} ${iconClass} mr-2 rounded-full bg-slate-200 text-white flex-shrink-0 ${responsive} border-2 border-white`}
        />
      )}
      {info && <span className="place-items-center text-base sm:text-xl ml-2 mt-4">{info}</span>}
    </>
  )
}

export default Avatar