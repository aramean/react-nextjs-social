"use client"

import { useState } from "react"

interface Option {
  label: string
  value: string
}

interface DropDownProps {
  options: Option[]
  bare?: boolean
  buttonIcon?: boolean
  buttonLabel?: string
  onSelect?: (option: Option) => void
}

const DropDown = ({ options, bare = false, buttonIcon = false, buttonLabel = "Options", onSelect }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`relative h-100 inline-block ${bare ? "text-white" : "bg-white shadow-xs rounded-md"}`}>
      <button
        type="button"
        className="inline-flex w-full h-full rounded-md px-3 py-2 text-xl font-bold text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {buttonIcon ? buttonIcon : buttonLabel}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-30 mt-0 w-56 origin-top-right rounded-md bg-white shadow-lg ring-black/5">
          <div className="py-1">
            {options.map((option, index) => (
              <button
                key={index}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  onSelect?.(option)
                  setIsOpen(false)
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DropDown