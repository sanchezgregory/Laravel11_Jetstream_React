import React from "react";

export default function Logo() {
    return (
        <div className="min-h-20 h-20 flex items-center px-6 border-b cursor-pointer">
            <img
                src="/logo.svg"
                alt="NetDi logo"
                width={30} height={30}
                className="h-10 w-auto"
            />
        </div>
    )
}
