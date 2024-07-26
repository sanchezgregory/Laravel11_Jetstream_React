import {Input } from "@/Components/ui/input"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/Components/ui/sheet"

import {MenuSquareIcon, Search} from "lucide-react";
import React from "react";
import MenuUser from "@/Components/MenuUser";
import SidebarRoutes from "@/Layouts/SidebarRoutes";
import {ModeToggle} from "@/Components/ModeToggle";

export default function Navbar() {
    return (
        <nav className="flex item-center px-2 gap-x-4 md:px-6 justify-between bg-background border-b h-20">
            {/*Div for mobile*/}
            <div className="block lg:hidden">
                <Sheet>
                    <SheetTrigger className="flex items-center">
                        <MenuSquareIcon strokeWidth={1.5} className="mt-5" />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <div className="p-6">
                            <SidebarRoutes />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            {/*Div for desktop*/}
            <div className="relative w-[300px] mt-5">
                <Input placeholder="Search..." className="rounded-lg"/>
                <Search strokeWidth={1} className="absolute top-2 right-2"/>
            </div>
            <div className="flex gap-x-2 items-center">
                <ModeToggle />
                <MenuUser />
            </div>
        </nav>
    )
}
