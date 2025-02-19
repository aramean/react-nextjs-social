interface InputTextProps {
    value?: string
    placeholder?: string
    height?: number
    textSize?: string
    width?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputText = ({ value = '', placeholder = '', height = 11, textSize = 'md', width = 'full', onChange }: InputTextProps) => {
    return (
        <input
            className={`flex indent-3 border-2 border-spacing-1 rounded-md border-black shadow-md w-${width} h-${height} text-${textSize}`}
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onChange}>
        </input>)
}

export default InputText

