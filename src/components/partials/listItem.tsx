import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

interface ListeItemProps {
  href?: string
  title?: string
  text?: string
  value?: string
}

const ListItem = ({ href = "", title = "", text = "", value }: ListeItemProps) => {
  return (<div className="width-full bg-white rounded-md">
    <Link href={href} className="font-normal hover:no-underline">
      <div className="flex flex-col justify-between border-r border-b border-l border-gray-300 lg:border-t lg:border-gray-200 rounded-b p-3 shadow-sm hover:bg-slate-50">
        <div className="flex flex-row items-center">
          {title && (<div className="text-gray-900 font-bold">{title}</div>)}
          <p className="text-gray-900 mr-24">{text}</p>
          <p className="text-gray-600 w-full">{value}</p>
          <p className="text-sm text-gray-600">
            <ArrowRightIcon className='w-5' />
          </p>
        </div>
      </div>
    </Link>
  </div>)
}

export default ListItem