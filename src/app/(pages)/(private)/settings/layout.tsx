"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import IconBack from "@/components/partials/icons/back"
import Sidebar from "@/components/partials/sidebar"
import Box from "@/components/partials/box"

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex flex-row p-5 gap-10">
      <div className="w-2/5">
        <Sidebar />
      </div>
      <div className="w-3/5">
        {pathname !== "/settings" ? (
          <>
            <Link className="flex flex-row gap-1" href="/settings">
              <IconBack />Back
            </Link>
            <Box>{children}</Box>
          </>
        ) : (
          children
        )}
      </div>
    </div>
  )
}