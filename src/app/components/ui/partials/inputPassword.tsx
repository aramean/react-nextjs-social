interface InputPasswordProps {
    value?: string
    placeholder?: string
    height?: "sm" | "md" | "lg" | "xl"
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
};

const InputPassword = ({ value, height = 'md', placeholder = '', onChange }: InputPasswordProps) => {
    const heightClass = {
        sm: "h-9",
        md: "h-10",
        lg: "h-11",
        xl: "h-12",
    }[height];

    return (
        <input
            className={`flex indent-3 border border-spacing-1 rounded-md border-black shadow-sm ${heightClass}`}
            type="password"
            value={value}
            placeholder={placeholder}
            onChange={onChange}>
        </input>)
};

export default InputPassword;

