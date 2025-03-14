"use client"

interface InputTextAreaProps {
  value?: string
  placeholder?: string
  height?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
  textSize?: string
  width?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const InputTextArea = ({ value = "", placeholder = "", height = "md", textSize = "md", width = "full", onChange }: InputTextAreaProps) => {
  const heightClass = {
    xs: "h9",
    sm: "h-10",
    md: "h-12",
    lg: "h-14",
    xl: "h-20",
    xxl: "h-24"
  }[height]

  return (
    <textarea
      className={`flex bg-white text-black p-3 border border-spacing-1 rounded-md border-slate-500 shadow-sm w-${width} focus:shadow-md focus:border-slate-800 ${heightClass} text-${textSize}`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}>
    </textarea>)
}

export default InputTextArea