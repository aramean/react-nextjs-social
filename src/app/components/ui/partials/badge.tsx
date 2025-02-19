import { ChatBubbleLeftIcon  } from "@heroicons/react/16/solid"

interface BadgeProps {
    size?: string
    color?: string
    showName?: boolean
    children?: React.ReactNode;
}

const Badge = ({ size = "32px", color = '#000000', showName = false, children }: BadgeProps) => {
    return (<>{children}</>)
}

export default Badge