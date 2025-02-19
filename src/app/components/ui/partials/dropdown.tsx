'use client'

import { useState } from "react"

interface Option {
    label: string
    value: string
}

interface DropDownProps {
    options: Option[]
    buttonIcon?: boolean
    buttonLabel?: string
    onSelect?: (option: Option) => void
}

const DropDown = ({ options, buttonIcon = false, buttonLabel = "Options", onSelect }: DropDownProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative inline-block text-left">
            <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                {buttonLabel}
            </button>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5">
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