interface InputTextProps {
    value: string
    placeholder: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputText = ({ value, placeholder, onChange }: InputTextProps) => {
    return (
        <input
            className="flex indent-3 border-2 border-spacing-1 rounded-md border-black shadow-md h-11"
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onChange}>
        </input>)
}

export default InputText

