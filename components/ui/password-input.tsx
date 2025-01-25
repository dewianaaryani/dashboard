"use client"
import * as React from "react"

import { cn } from "@/lib/utils"
import { Input } from "./input"
import { EyeIcon, EyeOffIcon } from "lucide-react"

const PasswordInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    return (
      <div className="relative">
        <Input type={showPassword ? "text" : "password"} {...props} ref={ref} className={cn("pr-10", className)} />
        <span className="absolute top-[7px] right-1 cursor-pointer select-none">
            {showPassword ? ( 
                <EyeIcon size={20} onClick={() => setShowPassword(false)} />
            ) : (
                <EyeOffIcon size={20} onClick={() => setShowPassword(true)} />
            )}
        </span>
      </div>
    )
  }
)
PasswordInput.displayName = "PasswordInput"

export { PasswordInput }
