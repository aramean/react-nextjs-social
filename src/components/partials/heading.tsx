"use client"

interface HeadingProps {
  text: string
  size?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl"
  weight?: "light" | "normal" | "semibold" | "bold"
  filled?: boolean
  color?: string
}

const Heading = ({ text, size = "base", weight = "normal", filled = false }: HeadingProps) => {
  const sizeClass = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "4xl": "text-4xl",
    "3xl": "text-3xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl"
  }[size] || "text-base"

  const weightClass = {
    light: "font-light",
    normal: "font-normal",
    semibold: "font-semibold",
    bold: "font-bold"
  }[weight] || "font-normal"

  return (
    <h1 className={`${sizeClass} ${weightClass} ${filled ? "bg-slate-100 border-r border-b border-l border-gray-300 lg:border-t lg:border-gray-200 rounded-b px-3 py-1 mb-4 shadow-sm" : ""}`}>
      {text}
    </h1>
  )
}

export default Heading