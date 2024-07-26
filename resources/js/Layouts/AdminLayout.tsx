import {PropsWithChildren} from "react";
import Navbar from "@/Layouts/Navbar";
import React from "react";
import Sidebar from "@/Layouts/Sidebar";
import Welcome from "@/Components/Welcome";

export default function AdminLayout({ children }: PropsWithChildren)  {
    return (
        <div className="flex w-full h-full">
            <div className="hidden  lg:block w-80 h-full xl:fixed">
                <Sidebar />
            </div>
            <div className="w-full xl:ml-80">
                <Navbar />
                <div className="p-4 bg-[#fafbfc] dark:bg-secondary">
                    <div className="p-5">
                        <div className="sm:px-4">
                            {/*<div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">*/}
                                {children}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
