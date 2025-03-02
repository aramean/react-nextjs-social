import Link from "next/link"

interface SidebarProps {
  title?: string
}

const Logo = ({ title = "" }: SidebarProps) => {
  return (<ul className="">
    {title}
    <Link href="">Account Preferences</Link>
  </ul>)
}

export default Logo