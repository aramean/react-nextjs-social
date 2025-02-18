interface InputPasswordProps {
    value: string
    placeholder: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputPassword = ({ value, placeholder, onChange }: InputPasswordProps) => {
    return (
        <input
            className="flex indent-3 border-2 border-spacing-1 rounded-md border-black shadow-sm h-11"
            type="password"
            value={value}
            placeholder={placeholder}
            onChange={onChange}>
        </input>)
}

export default InputPassword

