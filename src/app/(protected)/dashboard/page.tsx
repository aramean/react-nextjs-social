'use client'

import HeaderStatus from "@/app/components/ui/header.status"
import Logo from "@/app/components/ui/partials/logo"
import HeaderSearch from "@/app/components/ui/header.search"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { deleteAuthToken } from "@/util/cookies"

export default function Dashboard() {
    const router = useRouter()

    const handleLogout = async () => {
        deleteAuthToken()
        router.push('/login')
    }

    return (
        <div>
            <header className="flex justify-between items-center px-5 h-12 bg-black shadow-md">
                <Logo color="#fff" size="40" />
                <HeaderSearch />
                <HeaderStatus />
                <Link className="text-gray-50" href="/dashboard">Dashboard</Link>
                <nav>
                    <button className="text-gray-50" onClick={handleLogout}>Logout →</button>
                </nav>
            </header>
            <main className="p-10">
                <h2>Welcome</h2>
            </main>
        </div>
    )
}