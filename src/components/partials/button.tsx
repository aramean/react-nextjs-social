"use client"

interface ButtonProps {
  value: string
  size?: "xs" | "md" | "lg"
  outlined?: boolean
  disabled?: boolean
}
const Button = ({ value, size = "md", disabled = false, outlined = false }: ButtonProps) => {

  const sizeClass = {
    xs: "px-4 text-sm h-8",
    md: "px-8 text-base hover:shadow-md h-11",
    lg: "px-8 text-lg h-12"
  }[size]

  return (
    <button
      className={`btn rounded-full bg-slate-900 text-slate-100 font-semibold shadow-md hover:shadow-lg hover:bg-slate-950 active:border-solid active:border disabled:opacity-10 disabled:active:border-none 
        ${outlined ? "bg-transparent text-slate-950 hover:bg-transparent hover:text-black" : ""}
        ${sizeClass}`}
      disabled={disabled}
    >
      {value}
    </button>
  )
}

export default Button