interface BoxProps {
  children: React.ReactNode
}

const Box = ({ children }: BoxProps) => {
  return (<div className="width-full bg-white rounded-md">
    <div className="border-r border-b border-l border-gray-200 rounded-b p-5 flex flex-col justify-between shadow-sm mt-3">
      <div className="flex flex-row">
        {children}
      </div>
    </div>
  </div>)
}

export default Box