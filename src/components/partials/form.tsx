"use client"

interface FormProps {
  children: React.ReactNode
  className?: string
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

const Form = ({ children, className = "", onSubmit }: FormProps) => {
  return (<form className={`flex flex-col w-full w-${className}`} onSubmit={onSubmit}>{children}</form>)
}

export default Form