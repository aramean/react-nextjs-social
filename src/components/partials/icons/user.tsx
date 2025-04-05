"use client"

import { UserIcon } from "@heroicons/react/24/solid"

interface IconUserProps {
  size?: string
  color?: string
}

const IconUser = ({ size = "80%", color = "#000" }: IconUserProps) => {
  return (<UserIcon color={color} width={size} />)
}

export default IconUser