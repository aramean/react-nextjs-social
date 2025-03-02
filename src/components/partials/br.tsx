interface BrProps {
  height?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
}

const Br = ({ height = "none" }: BrProps) => {
  const heightClass = {
    none: "h-0",
    xs: "h-0.5",
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
    xl: "h-4",
    xxl: "h-5"
  }[height]

  return (<br className={`flex content-[''] ${heightClass}`}></br>)
}

export default Br