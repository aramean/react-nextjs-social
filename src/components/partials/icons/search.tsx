"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid"

interface IconBackProps {
  size?: string
  color?: string
  position?: boolean
  sizeClass?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
}

const IconMagnifyingGlass = ({ size = "lg", color = "inherit", position = false }: IconBackProps) => {
  const sizeClass = {
    xs: "w-2",
    sm: "w-3",
    md: "w-4",
    lg: "w-5",
    xl: "w-6",
    xxl: "w-7"
  }[size]

  const positionClass = position ? "absolute left-2.5 top-2.5" : ""

  return (<MagnifyingGlassIcon className={`flex content-[''] ${sizeClass} ${color} ${positionClass}`} />)
}

export default IconMagnifyingGlass