"use client"

import { FaceFrownIcon } from "@heroicons/react/24/solid"

interface IconNoPostsProps {
  size?: string
  color?: string
}

const IconNoPosts = ({ size = "20%", color = "#E5E4E2" }: IconNoPostsProps) => {
  return (<FaceFrownIcon color={color} width={size} />)
}

export default IconNoPosts