import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, propTypes, ...props }, ref) => {
    return (
        (
            <input
                type={type}
                className={cn(
                    "flex h-[48px] rounded-mb border border-white/10 focus:border-amber-400 font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    )
})
Input.displayName = "Input"

export default Input