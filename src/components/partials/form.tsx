interface FormProps {
  children: React.ReactNode
  className?: string
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

const Form = ({ children, className, onSubmit }: FormProps) => {
  return (<form className={`flex w-full ${className}`} onSubmit={onSubmit}>{children}</form>)
}

export default Form