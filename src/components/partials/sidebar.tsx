"use client"

import MenuItem from "@/components/partials/menuItem"

interface SidebarProps {
  title?: string
}

const Logo = ({ title = "" }: SidebarProps) => {
  return (<ul className="bg-white">
    {title}
    <MenuItem value="Account Preferences" href="/settings" />
  </ul>)
}

export default Logo