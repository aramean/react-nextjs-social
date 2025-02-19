import { ChatBubbleLeftIcon, UserIcon, BellIcon } from "@heroicons/react/24/solid"
import Badge from "./partials/badge"
import Link from "next/link"

const headerStatus = () => {
    return (<div className="flex gap-2">
        <Badge>
            <UserIcon className="rounded-full bg-white p-1 ml-2" width={32} />
        </Badge>
        <Badge>
            <Link href="/messages">
                <ChatBubbleLeftIcon className="rounded-full bg-white p-1" width={32} />
            </Link>
        </Badge>
        <Badge>
            <BellIcon className="rounded-full bg-white p-1" width={32} />
        </Badge>
    </div>)
}

export default headerStatus