"use client"
import { useRouter } from "next/navigation"
import { ChatBubbleLeftIcon, UserIcon, BellIcon } from "@heroicons/react/24/solid"
import Badge from "./partials/badge"
import Link from "next/link"
import DropDown from "./partials/dropdown"
import { deleteAuthToken } from "@/util/cookies"

const HeaderStatus = () => {
  const router = useRouter()

  const handleLogout = async () => {
    deleteAuthToken()
    router.push("/login")
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
        buttonLabel="⋮"
        options={[
          { label: "Profile", value: "profile" },
          { label: "Settings", value: "settings" },
          { label: "Logout", value: "logout" }
        ]}
        onSelect={(option) => {
          if (option.value === "logout") {
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