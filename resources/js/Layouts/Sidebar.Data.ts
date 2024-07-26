import {
    BarChart4,
    Calendar,
    Check,
    ChevronDown,
    ChevronRight,
    Clock,
    Cog,
    CreditCard,
    Download,
    Home, Settings, ShieldCheck,
} from "lucide-react";

export const dataGeneralSidebar = [
    {
        label: "Admin",
        icon: Home,
        href: "/admin",
    },
    {
        label: "Calendar",
        icon: Calendar,
        href: "/calendar",
    },
    {
        label: "Clients",
        icon: CreditCard,
        href: "/clients",
    },
    {
        label: "Projects",
        icon: Check,
        href: "/projects",
    },
    {
        label: "Reports",
        icon: BarChart4,
        href: "/reports",
    },
    {
        label: "Settings",
        icon: Cog,
        href: "/settings",
    },
]

export const dataToolsSidebar = [
    {
        label: "Profile",
        icon: Cog,
        href: "/profile",
    },
    {
        label: "Logout",
        icon: Cog,
        href: "/logout",
    },
]

export const dataSupportSidebar = [
    {
        label: "Settings",
        icon: Settings,
        href: "/calendar",
    },
    {
        label: "ShieldCheck",
        icon: ShieldCheck,
        href: "/security",
    },
]
