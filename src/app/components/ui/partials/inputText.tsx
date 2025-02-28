interface InputTextProps {
    value?: string
    placeholder?: string
    height?: "sm" | "md" | "lg" | "xl"
    textSize?: string
    width?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputText = ({ value = "", placeholder = "", height = "md", textSize = "md", width = "full", onChange }: InputTextProps) => {
  const heightClass = {
    sm: "h-9",
    md: "h-10",
    lg: "h-11",
    xl: "h-12"
  }[height]

  return (
    <input
      className={`flex bg-neutral-50 indent-3 border border-spacing-1 rounded-md border-slate-500 shadow-sm focus:shadow-md focus:bg-white w-${width} focus:border-slate-800 ${heightClass} text-${textSize}`}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}>
    </input>)
}

export default InputText

