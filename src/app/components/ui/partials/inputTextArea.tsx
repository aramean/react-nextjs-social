interface InputTextAreaProps {
    value?: string
    placeholder?: string
    height?: "sm" | "md" | "lg" | "xl"
    textSize?: string
    width?: string
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const InputTextArea = ({ value = '', placeholder = '', height = 'md', textSize = 'md', width = 'full', onChange }: InputTextAreaProps) => {
    const heightClass = {
        sm: "h-9",
        md: "h-10",
        lg: "h-14",
        xl: "h-16",
    }[height]

    return (
        <textarea
            className={`flex p-3 border border-spacing-1 rounded-md border-black shadow-sm w-${width} ${heightClass} text-${textSize}`}
            value={value}
            placeholder={placeholder}
            onChange={onChange}>
        </textarea>)
}

export default InputTextArea
