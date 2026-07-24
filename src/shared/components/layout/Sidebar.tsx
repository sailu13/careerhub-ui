import { useTheme } from "@/context/ThemeContext";
import SidebarLogo from "./sidebar/SidebarLogo";
import SidebarMenu from "./sidebar/SidebarMenu";
import SidebarFooter from "./sidebar/SidebarFooter";


type Props = {
    open: boolean;
    onClose: () => void;
};

export default function Sidebar({ open, onClose }: Props) {
    const { theme } = useTheme();

    return (
        <>
            {/* Mobile Overlay */}
            {open && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                />
            )}

            <aside className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r transition-transform duration-300 
                ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
                ${theme === "light" ? "border-slate-200 bg-white" : "border-slate-800 bg-slate-950"}`}>

                <SidebarLogo />
                <SidebarMenu onClose={onClose}/>
                <SidebarFooter />
            </aside>
        </>
    );
}