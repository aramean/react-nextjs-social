import { UserIcon, LockClosedIcon, EllipsisHorizontalIcon } from "@heroicons/react/16/solid"

interface BoxProps {
  picture?: string
  title?: string
  text?: string
  createdAt?: string
};

const Box = ({ picture = "", title = "", text = "", createdAt }: BoxProps) => {
  return (<div className="width-full bg-white rounded-md">
    {picture && (
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title="."
        style={{ backgroundImage: `url(${picture})` }}
      />
    )}
    <div className="border-r border-b border-l border-gray-300 lg:border-t lg:border-gray-200 rounded-b p-5 flex flex-col justify-between leading-normal shadow-sm mt-3">
      <div className="flex">
        <UserIcon className="w-11 h-10 mr-2 mb-1 p-1 rounded-full bg-slate-200 text-white" />
        <div className="text-sm w-full mt-2 flex flex-col">
          <p className="text-gray-900 leading-none">Josef Gabrielsson</p>
          <p className="text-gray-600 text-xs">{createdAt} * <LockClosedIcon className='mr-1 w-3 inline-flex' /></p>
        </div>
        <p className="text-sm text-gray-600 flex place-items-start">
          <EllipsisHorizontalIcon className='w-5' />
        </p>
      </div>
      <div className="mb-1">
        {title && (<div className="text-gray-900 font-bold text-xl mb-2">Title??</div>)}
        <p className="text-gray-700 text-base">{text}</p>
      </div>
    </div>
  </div>)
}

export default Box