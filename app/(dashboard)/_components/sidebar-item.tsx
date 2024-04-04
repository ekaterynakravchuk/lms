'use client'

import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

interface SidebarItemProps{
    icon: LucideIcon,
    href: string,
    label: string
}

export function SidebarItem({icon:Icon, href, label}: SidebarItemProps){
const router = useRouter()
const pathname = usePathname()

const isActive = (pathname === '/' && href === '/') || pathname === href || pathname.startsWith(`${href}/`)

const onClick = () => {
    router.push(href)
}


    return(
        <button onClick={onClick} type="button" className={cn('flex items-center gap-x-2 pl-6 transition-all hover:text-cyan-700 hover:bg-zinc-100', isActive && 'text-cyan-700 bg-cyan-50')}>
            <div className={cn('flex items-center py-4 gap-x-2')}>
                <Icon size={22} className={cn('text-slay-500 hover:text-cyan-700', isActive && 'text-cyan-700')} />
            </div>
            <div>{label}</div>
            <div className={cn('bg-transparent h-full w-1 ml-auto transition-all', isActive && 'bg-cyan-700')} />
        </button>
    )
}