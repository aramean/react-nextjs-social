interface FormProps {
  children: React.ReactNode
  className?: string
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

const Form = ({ children, className, onSubmit }: FormProps) => {
  return (<form className={className} onSubmit={onSubmit}>{children}</form>)
}

export default Form