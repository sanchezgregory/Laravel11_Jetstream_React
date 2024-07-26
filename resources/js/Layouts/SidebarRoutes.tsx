import React from "react";
import SideBarLink from "@/Layouts/SidebarLink";
import {dataGeneralSidebar, dataToolsSidebar, dataSupportSidebar} from "@/Layouts/Sidebar.Data";
import {Separator} from "@/Components/ui/separator";
import {Button} from "@/Components/ui/button";

export default function SidebarRoutes() {
    let mobile = false;
    if (window.matchMedia('screen and (max-width: 768px)').matches) {
        mobile = true;
    }
    return (
        <div className="flex flex-col justify-between h-full">
            <div>
                <div className="p-2 md:p-6">
                    <p className="text-slate-500 font-bold mb-2">GENERAL</p>
                    {dataGeneralSidebar.map(item => (
                        <SideBarLink
                            mobile={mobile}
                            key={item.label}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                        />
                    ))}
                </div>
                <div className="p-2 md:p-6">
                    <Separator/>
                    <p className="text-slate-500 font-bold pt-4  mb-2">TOOLS</p>
                    {dataToolsSidebar.map(item => (
                        <SideBarLink
                            mobile={mobile}
                            key={item.label}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                        />
                    ))}
                </div>
                <div className="p-2 md:p-6">
                    <Separator/>
                    <p className="text-slate-500 font-bold pt-4 mb-2">SUPPORT</p>
                    {dataSupportSidebar.map(item => (
                        <SideBarLink
                            mobile={mobile}
                            key={item.label}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-4 flex-end">

                {/*<Separator />*/}
                {/*<div className="text-center p-6">*/}
                {/*    <Button variant="outline" className="w-full">*/}
                {/*        Sign out*/}
                {/*    </Button>*/}
                {/*</div>*/}
                <Separator />
                <footer className="mt-3 p-3 text-center">
                    2024. All rights reserved
                </footer>

            </div>
        </div>
    )
}
