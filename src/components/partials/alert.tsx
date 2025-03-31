"use client"

interface AlertProps {
  message: string
  type?: "warning" | "info"
}

const Alert = ({ message, type = "warning" }: AlertProps) => {

  const typeClass = {
    warning: "bg-red-500 text-white",
    info: "bg-orange-400 text-white"
  }[type]

  return (<div className={`${typeClass} my-3 p-4 border-1 border-solid border-red-950 rounded-sm`}>
    <small>{message}</small>
  </div>)
}

export default Alert