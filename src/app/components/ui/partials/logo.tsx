import { UserGroupIcon } from "@heroicons/react/24/solid"
interface LogoProps {
    size?: string
    color?: string
    showName?: boolean
}

const Logo = ({ size = "100%", color = '#726192', showName = false }: LogoProps) => {
    return (<UserGroupIcon color={color} width={size} />)
}

export default Logo