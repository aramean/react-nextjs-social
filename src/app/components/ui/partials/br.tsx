interface BrProps {
    height?: "none" | "sm" | "md" | "lg" | "xl"
}

const Br = ({ height = "none" }: BrProps) => {
    const heightClass = {
        none: "h-0",
        sm: "h-0",
        md: "h-10",
        lg: "h-11",
        xl: "h-12",
    }[height];

    return (<br className={`content-[''] ${heightClass}`}></br>)
}

export default Br