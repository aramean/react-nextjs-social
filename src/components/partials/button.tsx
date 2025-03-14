"use client"

interface ButtonProps {
  value: string
  disabled?: boolean
}

const Button = ({ value, disabled = false }: ButtonProps) => {
  return (
    <button
      className="btn rounded-full bg-slate-900 text-white font-semibold pr-8 pl-8 shadow-md h-11 hover:shadow-lg hover:bg-black active:border-solid active:border disabled:opacity-10 disabled:active:border-none"
      disabled={disabled}
    >
      {value}
    </button>
  )
}

export default Button