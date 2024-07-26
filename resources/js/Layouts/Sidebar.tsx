
import React from "react";
import SidebarRoutes from "@/Layouts/SidebarRoutes";
import Logo from "@/Layouts/Logo";

export default function Sidebar() {
    return (
        <div className="h-screen">
            <div className="h-full flex flex-col border-r p-4">
                <Logo/>
                <SidebarRoutes />
            </div>
        </div>
    )
}
