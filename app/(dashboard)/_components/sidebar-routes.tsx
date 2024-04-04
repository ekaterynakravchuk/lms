'use client'

import { Compass, Layout } from "lucide-react"
import { SidebarItem } from "./sidebar-item";

const guestRoutes =[
    {
        href: '/',
        icon: Layout,
        label: 'Dashboard'
    },
    {
        href: '/search',
        icon: Compass,
        label: 'Search'
    },
]

export function SidebarRoutes(){
    const routes = guestRoutes;
    return(
        <div className="flex flex-col w-full">
            {routes.map((route)=>(
                <SidebarItem
                key={route.href}
                icon={route.icon}
                label={route.label}
                href={route.href}
                />
            ))}
        </div>
    )
}