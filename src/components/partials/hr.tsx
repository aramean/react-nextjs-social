"use client"

interface HrProps {
  size?: "xs" | "md" | "lg" | "xl"
}

const Hr = ({ size = "md" }: HrProps) => {
  const sizeClass = {
    xs: "my-1",
    md: "my-2",
    lg: "my-3",
    xl: "my-4"
  }[size]

  return <hr className={sizeClass} />
}

export default Hr