import React from "react";
import {Link} from "@inertiajs/react";
import {cn} from "@/lib/utils";
import useTypedPage from "@/Hooks/useTypedPage";

// @ts-ignore
export default function SidebarLink({mobile, href, label, icon: Icon}) {

    const pathName = useTypedPage().url
    const isActive = pathName === href
    console.log(mobile)
    return (
        <Link href={href} className={cn(`flex gap-x-2 mt-2 light:text-slate-700 dark:text-white text-sm items-center  hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer`, isActive && 'bg-slate-400/20 font-bold')}>
            <Icon className="w-5 h-5" strokeWidth={1}/>
            <span className={cn(!mobile && 'text-xl')}>{label}</span>
        </Link>
    )
}
