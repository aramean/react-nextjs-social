import { UserIcon, LockClosedIcon } from '@heroicons/react/16/solid';

interface CardProps {
  picture?: string
  title?: string
  text?: string
  createdAt?: string
};

const Card = ({ picture = '', title = '', text = '', createdAt }: CardProps) => {
  return (<div className="max-w-sm w-full lg:max-w-full lg:flex">
    {picture && (
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title="."
        style={{ backgroundImage: `url(${picture})` }}
      />
    )}
    <div className="border-r border-b border-l border-gray-200 lg:border-l-0 lg:border-t lg:border-gray-100 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-sm mt-6">
      <div className="flex items-center">
        <UserIcon className="w-10 h-10 mr-2 mb-3 p-1 rounded-full bg-slate-200 text-white" width={20} height={0} />
        <div className="text-sm flex flex-col">
          <p className="text-gray-900 leading-none">Josef Gabrielsson</p>
          <p className="text-gray-600 text-xs">{createdAt}</p>
        </div>
        <p className="text-sm text-gray-600 flex items-center">
          <LockClosedIcon width="12" className='mr-1' />
        </p>
      </div>
      <div className="mb-8">
        {title && (<div className="text-gray-900 font-bold text-xl mb-2">Title??</div>)}
        <p className="text-gray-700 text-base">{text}</p>
      </div>
    </div>
  </div>);
};

export default Card;