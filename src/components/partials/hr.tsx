"use client"

interface HrProps {
  size?: "xs" | "md" | "lg"
}

const Hr = ({ size = "md" }: HrProps) => {
  const sizeClass = {
    xs: "my-1",
    md: "my-2",
    lg: "my-3"
  }[size]

  return (<hr className={sizeClass}></hr>)
}

export default Hr