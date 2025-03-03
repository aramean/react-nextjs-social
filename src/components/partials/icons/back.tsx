import { ArrowLeftIcon } from "@heroicons/react/16/solid"

interface IconBackProps {
  size?: string
  color?: string
  sizeClass?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
}

const IconBack = ({ size = "lg", color = "inherit" }: IconBackProps) => {
  const sizeClass = {
    xs: "w-2",
    sm: "w-3",
    md: "w-4",
    lg: "w-5",
    xl: "w-6",
    xxl: "w-7"
  }[size]

  return (<ArrowLeftIcon className={`flex content-[''] ${sizeClass} ${color}`} />)
}

export default IconBack