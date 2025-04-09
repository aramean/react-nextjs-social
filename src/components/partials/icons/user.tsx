"use client"

import { UserIcon as Icon } from "@heroicons/react/24/solid"

interface IconUserProps {
  size?: string
  color?: string
}

const IconUser = ({ size = "80%", color = "#000" }: IconUserProps) => {
  return (<Icon color={color} width={size} />)
}

export default IconUser