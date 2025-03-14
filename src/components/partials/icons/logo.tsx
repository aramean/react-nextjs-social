"use client"

import { UserGroupIcon } from "@heroicons/react/24/solid"

interface IconLogoProps {
  size?: string
  color?: string
}

const IconLogo = ({ size = "80%", color = "#726192" }: IconLogoProps) => {
  return (<UserGroupIcon color={color} width={size} />)
}

export default IconLogo