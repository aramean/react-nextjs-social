interface BoxProps {
  title?: string
  direction?: "col" | "row"
  children: React.ReactNode
}

const Box = ({ title, direction = "col", children }: BoxProps) => {
  return (
    <div className="flex flex-col bg-white border-r border-b border-l border-gray-200 rounded-b p-5 justify-between shadow-sm mt-3">
      <div className={`flex flex-${direction}`}>
        {title}
        {children}
      </div>
    </div>
  )
}

export default Box