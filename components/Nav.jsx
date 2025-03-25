"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Resume",
        path: "/resume",
    },
    {
        name: "Work",
        path: "/work",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];


const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((links, index) => {
                return <Link href={links.path}
                    key={index}
                    className={`${links.path === pathname && "text-amber-400 border-b-2 border-amber-400"}
                    capitalize font-medium hover:text-amber-400 transition-all`}
                >
                    {links.name}
                </Link>
            })}
        </nav>
    )
}

export default Nav