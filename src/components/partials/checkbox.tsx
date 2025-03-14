"use client"

interface CheckBoxProps {
  checked: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  children: React.ReactNode
}

const CheckBox = ({ checked = false, onChange, children }: CheckBoxProps) => {
  return (<div className="span">
    <input type="checkbox" onChange={onChange} className="mr-2 w-4 h-4 border bg-white border-black rounded-sm shadow-md focus:shadow-lg focus:bg-white" checked={checked} />{children}
  </div>)
}

export default CheckBox