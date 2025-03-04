interface InputPasswordProps {
  value?: string
  placeholder?: string
  height?: "sm" | "md" | "lg" | "xl"
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputPassword = ({ value, height = "md", placeholder = "", onChange }: InputPasswordProps) => {
  const heightClass = {
    sm: "h-9",
    md: "h-10",
    lg: "h-11",
    xl: "h-12"
  }[height]

  return (
    <input
      className={`flex bg-white text-black indent-3 border border-spacing-1 rounded-md border-slate-500 shadow-sm focus:shadow-md focus:border-slate-800 ${heightClass}`}
      type="password"
      value={value}
      placeholder={placeholder}
      onChange={onChange}>
    </input>)
}

export default InputPassword

