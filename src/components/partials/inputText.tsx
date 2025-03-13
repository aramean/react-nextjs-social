import IconMagnifyingGlass from "./icons/search"

interface InputTextProps {
  value?: string
  placeholder?: string
  height?: "sm" | "md" | "lg" | "xl"
  indent?: "none" | "sm" | "md" | "lg" | "xl"
  icon?: boolean
  textSize?: string
  width?: string
  responsive?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputText = ({ value = "", placeholder = "", height = "md", indent = "none", textSize = "md", icon = false, width = "full", responsive = "", onChange }: InputTextProps) => {
  const heightClass = {
    sm: "h-9",
    md: "h-10",
    lg: "h-11",
    xl: "h-12"
  }[height]

  const indentClass = {
    none: "pl-0",
    sm: "pl-2.5",
    md: "pl-3.5",
    lg: "pl-4.5",
    xl: "pl-5"
  }[indent]

  return (
    <><label className="flex w-full relative text-gray-400 focus-within:text-gray-600">
      {icon && <IconMagnifyingGlass position={true} />}
      <input
        className={`flex bg-white text-black indent-3.5 border border-spacing-1 rounded-md border-slate-500 shadow-sm focus:shadow-md w-${width} focus:border-slate-800 ${heightClass} text-${textSize} ${indentClass} ${responsive}`}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}>
      </input>
    </label></>)
}

export default InputText

