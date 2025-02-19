interface HeadingProps {
    text: string
    size?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl"
}

const Heading = ({ text, size = "base" }: HeadingProps) => {
    const sizeClass = {
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "4xl": "text-4xl",
        "3xl": "text-3xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
        "7xl": "text-7xl",
        "8xl": "text-8xl",
        "9xl": "text-9xl",
    }[size] || "text-base"

    return <h1 className={sizeClass}>{text}</h1>
}

export default Heading