import { getAuthToken } from "@/utils/cookies"
import { redirect } from "next/navigation"
import Link from "next/link"
import Logo from "@components/ui/partials/logo"
import HeaderSearch from "@components/ui/header.search"
import HeaderStatus from "@components/ui/header.status"

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {

  if (!await getAuthToken()) {
    return redirect("/login")
  }

  return (<>
    <header className="flex bg-black border-b border-gray-200 shadow-md gap-4 fixed top-0 inset-x-0 z-100 h-16 items-center px-4">
      <Link href="dashboard">
        <Logo color="#ffffff" size="30" />
      </Link>
      <HeaderSearch />
      <HeaderStatus />
    </header>
    <main className="bg-zinc-50 py-16">
      <div className="max-w-7xl m-auto mt-5">{children}</div>
    </main>
  </>)
}