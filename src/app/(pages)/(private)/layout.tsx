"use client"

import Link from "next/link"
import IconLogo from "@/components/partials/icons/logo"
import HeaderSearch from "@/components/forms/header.search"
import HeaderStatus from "@/components/header.status"

interface LayoutProps {
  readonly children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (<>
    <header className="flex bg-black border-b border-gray-200 shadow-md gap-4 fixed top-0 inset-x-0 z-50 h-16 items-center px-4">
      <Link href="/dashboard">
        <IconLogo color="#ffffff" size="30" />
      </Link>
      <HeaderSearch />
      <HeaderStatus />
    </header>
    <main className="bg-zinc-50 py-8 sm:py-14">
      <div className="max-w-screen-xl m-auto mt-5">{children}</div>
    </main>
  </>)
}