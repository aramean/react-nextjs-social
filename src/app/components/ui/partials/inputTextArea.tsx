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
        lg: "h-11",
        xl: "h-12",
    }[height]

    return (
        <textarea
            className={`flex indent-3 border border-spacing-1 rounded-md border-black shadow-md w-${width} ${heightClass} text-${textSize}`}
            value={value}
            placeholder={placeholder}
            onChange={onChange}>
        </textarea>)
}

export default InputTextArea
