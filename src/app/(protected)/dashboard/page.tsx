'use client'

import { deleteAuthToken } from "@/util/cookies"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Dashboard() {
    const router = useRouter()

    const handleLogout = async () => {
        deleteAuthToken()
        router.push('/login')
    };

    return (
        <div>
            <header className="flex items-center justify-between px-5 h-12 bg-black">
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