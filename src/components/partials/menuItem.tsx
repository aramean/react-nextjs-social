"use client"

import { ChevronRightIcon } from "@heroicons/react/16/solid"
import Link from "next/link"

interface ListeItemProps {
  href?: string
  title?: string
  value?: string
}

const MenuItem = ({ href = "", title = "", value = "" }: ListeItemProps) => {
  return (<div className="width-full rounded-md">
    <Link href={href} className="font-semibold hover:no-underline">
      <div className="flex flex-col justify-between border-slate-300 rounded-b p-3 shadow-sm hover:bg-slate-50">
        <div className="flex flex-row items-center">
          {title && (<div className="text-gray-900 font-bold">{title}</div>)}
          <p className="text-gray-900 mr-2">{value}</p>
          <p className="text-sm pr-1 text-gray-600">
            <ChevronRightIcon className='w-5' />
          </p>
        </div>
      </div>
    </Link>
  </div>)
}

export default MenuItem