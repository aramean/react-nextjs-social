"use client"

import { useRouter } from "next/navigation"
import { getAuthToken } from "@/utils/auth"
import { useLogout } from "@/hooks/useLogout"
import { ChatBubbleLeftIcon, UserIcon, BellIcon } from "@heroicons/react/24/solid"
import Badge from "@/components/partials/badge"
import Link from "next/link"
import DropDown from "@/components/partials/dropdown"

const HeaderStatus = () => {

  const { logout } = useLogout()
  const router = useRouter()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <div className="flex gap-2">
      <Badge>
        <Link href="/friends">
          <UserIcon className="rounded-full border-b border-gray-200 text-white p-2 ml-2" width={40} />
        </Link>
      </Badge>
      <Badge>
        <Link href="/messages">
          <ChatBubbleLeftIcon className="rounded-full border-b border-gray-200 text-white p-2" width={40} />
        </Link>
      </Badge>
      <Badge>
        <BellIcon className="rounded-full border-b border-gray-200 text-white p-2" width={40} />
      </Badge>

      <DropDown
        bare={true}
        buttonLabel="⋮"
        options={[
          { label: "Profile", value: "profile" },
          { label: "Settings", value: "settings" },
          { label: "Logout", value: "logout" }
        ]}
        onSelect={(option) => {
          if (option.value === "profile") {
            router.push("/profile/" + getAuthToken())
          } else if (option.value === "settings") {
            router.push("/settings")
          } else if (option.value === "logout") {
            handleLogout()
          } else {
            console.log("Selected:", option)
          }
        }}
      />
    </div>
  )
}

export default HeaderStatus