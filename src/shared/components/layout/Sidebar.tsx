import { LayoutDashboard, User, FileText, Briefcase, Settings, Sparkles, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SidebarItem } from "./SidebarItem";
import { useTheme } from "@/context/ThemeContext";
import AppCard from "../common/AppCard";

type Props = {
    open: boolean;
    onClose: () => void;
};

export default function Sidebar({ open, onClose }: Props) {
    // const email = localStorage.getItem("email") ?? "";
    // const firstName = localStorage.getItem("firstName") ?? "";
    // const lastName = localStorage.getItem("lastName") ?? "";
    const navigate = useNavigate();
    const { theme } = useTheme();
    const isLight = theme === "light";

    function handleLogout() {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
        localStorage.removeItem("userId");
        navigate("/login", { replace: true });
    }

    return (
        <>
            {/* Mobile Overlay */}
            {open && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                />
            )}

            <aside className={`flex h-screen w-72 flex-col border-r transition-colors duration-300 ${theme === "light"
                ? "border-slate-300 bg-white"
                : "border-slate-800 bg-slate-900"
                }`}>
                {/* Logo */}
                <AppCard className="rounded-none border-x-0 border-t-0 shadow-none">
                    <div className="flex flex-col items-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl 
                          font-bold text-white shadow-lg">
                            CH
                        </div>
                        <h1
                            className={`mt-4 text-3xl font-bold
${isLight
                                    ? "text-slate-900"
                                    : "text-white"
                                }`}
                        >
                            CareerHub
                        </h1>
                        <p
                            className={
                                isLight
                                    ? "text-slate-500"
                                    : "text-slate-400"
                            }
                        >
                            Your Career Companion
                        </p>
                    </div>
                </AppCard>

                <nav className="flex-1 space-y-2 p-4">
                    <SidebarItem
                        to="/dashboard"
                        label="Dashboard"
                        Icon={LayoutDashboard}
                        onClick={onClose}
                    />

                    <SidebarItem
                        to="/profile"
                        label="Profile"
                        Icon={User}
                        onClick={onClose}
                    />

                    <SidebarItem
                        to="/resume"
                        label="Resume"
                        Icon={FileText}
                        onClick={onClose}
                    />

                    <SidebarItem
                        to="/jobs"
                        label="Jobs"
                        Icon={Briefcase}
                        onClick={onClose}
                    />

                    <SidebarItem
                        to="/ai-review"
                        label="AI Review"
                        Icon={Sparkles}
                        onClick={onClose}
                    />

                    <SidebarItem
                        to="/settings"
                        label="Settings"
                        Icon={Settings}
                        onClick={onClose}
                    />
                </nav>

                {/* Logout */}
                <div className={`border-b p-6 ${theme === "light"
                    ? "border-slate-300"
                    : "border-slate-800"
                    }`}>
                    <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-400 
                          transition hover:bg-red-600 hover:text-white">
                        <LogOut size={22} />
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
}