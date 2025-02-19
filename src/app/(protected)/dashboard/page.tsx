'use client'

import { useRouter } from "next/navigation"
import { deleteAuthToken } from "@/util/cookies"

export default function Dashboard() {
    const router = useRouter()

    const handleLogout = async () => {
        deleteAuthToken()
        router.push('/login')
    }

    return (<>
        <nav>
            <button className="text-gray-50" onClick={handleLogout}>Logout →</button>
        </nav>
        <h2>Welcome</h2>
    </>
    )
}