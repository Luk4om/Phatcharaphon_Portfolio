"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

export const Tabs = TabsPrimitive.Root

export const TabsList = React.forwardRef(({ className, ...props }, ref) => (
    <TabsPrimitive.List
        ref={ref}
        className={cn(
            "inline-flex h-auto rounded-md p-1 text-primar",
            className
        )}
        {...props}
    />
))
TabsList.displayName = TabsPrimitive.List.displayName

export const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
    <TabsPrimitive.Trigger
        className={cn(
            "inline-flex items-center w-full bg-[#27272c] justify-center whitespace-nowrap rounded-lg p-3 text-base font-medium ring-offset-white transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-amber-400 data-[state=active]:text-primary data-[statee=active]:font-bold data-[state=active]:shadow-sm",
            className
        )}
        {...props}
        ref={ref}
    />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

export const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
    <TabsPrimitive.Content
        className={cn(
            "mt-h-[480px] ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            className
        )}
        {...props}
        ref={ref}
    />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export default { Tabs, TabsList, TabsTrigger, TabsContent }