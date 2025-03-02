interface BadgeProps {
  number?: number
  children?: React.ReactNode
}

const Badge = ({ number = 0, children }: BadgeProps) => {
  return (<div className="relative">
    {number > 0 && (
      <span className="absolute bg-red-700 size-5 text-center color-white">{number}</span>
    )}
    {children}
  </div>)
}

export default Badge