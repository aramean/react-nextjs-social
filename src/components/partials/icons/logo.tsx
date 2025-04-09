"use client"

import { UserGroupIcon as Icon } from "@heroicons/react/24/solid"

interface IconLogoProps {
  size?: string
  color?: string
}

const IconLogo = ({ size = "80%", color = "#726192" }: IconLogoProps) => {
  return (<Icon color={color} width={size} />)
}

export default IconLogo