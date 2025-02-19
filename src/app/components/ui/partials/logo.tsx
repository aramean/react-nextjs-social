import { UserGroupIcon } from "@heroicons/react/24/solid"
interface LogoProps {
    size?: string
    color?: string
}

const Logo = ({ size = "80%", color = '#726192' }: LogoProps) => {
    return (<UserGroupIcon color={color} width={size} className=""/>)
}

export default Logo