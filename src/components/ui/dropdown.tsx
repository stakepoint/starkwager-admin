"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface DropdownProps {
  value: string
  onChange: (value: string) => void
  options: string[]
  className?: string
}

export function Dropdown({ value, onChange, options, className }: DropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="relative">
      <button 
        className={cn(
          "flex items-center justify-between w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-sm hover:bg-slate-100 dark:hover:bg-slate-700",
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value}
        <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-1 w-full rounded-md bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 z-10">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                className={cn(
                  "block w-full text-left px-4 py-2 text-sm",
                  value === option 
                    ? "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white"
                    : "text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                )}
                onClick={() => {
                  onChange(option)
                  setIsOpen(false)
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}