import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid"
import Badge from "./partials/badge"

const headerStatus = () => {
    return (<div className="flex gap-2">
        <Badge>
            <ChatBubbleLeftIcon className="rounded-full bg-white p-1" width={32} />
        </Badge>
        <Badge>
            <ChatBubbleLeftIcon className="rounded-full bg-white p-1" width={32} />
        </Badge>
    </div>)
}

export default headerStatus