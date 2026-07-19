import {
    ChevronDown,
    LogOut,
    Moon,
    Settings,
    User,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { fa } from "zod/v4/locales";

export default function UserDropdown() {
    const navigate = useNavigate();

    const { theme } = useTheme();

    const isLight = theme === "light";

    const [open, setOpen] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    const firstName = localStorage.getItem("firstName") ?? "";
    const lastName = localStorage.getItem("lastName") ?? "";
    const email = localStorage.getItem("email") ?? "";

    const initials =
        firstName.charAt(0).toUpperCase() +
        lastName.charAt(0).toUpperCase();

    function logout() {
        setOpen(false);
        localStorage.clear();
        navigate("/login", { replace: true });
    }

    function handleNavigate(path: string) {
        setOpen(false);

        // Small delay lets the closing animation play
        setTimeout(() => {
            navigate(path);
        }, 150);
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                ref.current &&
                !ref.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
    }, []);

    return (
        <div ref={ref} className="relative">

            <button
                onClick={() => setOpen(!open)}
                className={`flex items-center gap-3 rounded-xl px-3 py-2 transition
        ${isLight
                        ? "hover:bg-slate-100"
                        : "hover:bg-slate-800"
                    }`}
            >

                {/* Avatar */}

                <div className="relative">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                        {initials}
                    </div>

                    <span
                        className={`absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 bg-green-500
            ${isLight
                                ? "border-white"
                                : "border-slate-900"
                            }`}
                    />

                </div>

                <div className="hidden text-left md:block">

                    <p
                        className={`font-semibold ${isLight
                                ? "text-slate-900"
                                : "text-white"
                            }`}
                    >
                        {firstName} {lastName}
                    </p>

                    <p
                        className={`text-xs ${isLight
                                ? "text-slate-500"
                                : "text-slate-400"
                            }`}
                    >
                        CareerHub User
                    </p>

                </div>

                <ChevronDown
                    size={18}
                    className={`${isLight ? "text-slate-700" : "text-white"} transition-transform ${open ? "rotate-180" : ""
                        }`}
                />

            </button>

            <AnimatePresence>

                {open && (

                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute right-0 mt-3 w-72 overflow-hidden rounded-2xl border shadow-2xl
            ${isLight
                                ? "border-slate-200 bg-white"
                                : "border-slate-700 bg-slate-900"
                            }`}
                    >

                        <div
                            className={`border-b p-5
              ${isLight
                                    ? "border-slate-200"
                                    : "border-slate-700"
                                }`}
                        >

                            <p
                                className={`font-semibold ${isLight
                                        ? "text-slate-900"
                                        : "text-white"
                                    }`}
                            >
                                {firstName} {lastName}
                            </p>

                            <p
                                className={`text-sm ${isLight
                                        ? "text-slate-500"
                                        : "text-slate-400"
                                    }`}
                            >
                                {email}
                            </p>

                        </div>

                        <button
                            onClick={() => handleNavigate("/profile")}
                            className={`flex w-full items-center gap-3 px-5 py-3 transition
              ${isLight
                                    ? "text-slate-700 hover:bg-slate-100"
                                    : "text-white hover:bg-slate-800"
                                }`}
                        >
                            <User size={18} />
                            My Profile
                        </button>

                        <button
                            onClick={() => handleNavigate("/settings")}
                            className={`flex w-full items-center gap-3 px-5 py-3 transition
              ${isLight
                                    ? "text-slate-700 hover:bg-slate-100"
                                    : "text-white hover:bg-slate-800"
                                }`}
                        >
                            <Settings size={18} />
                            Settings
                        </button>

                        <button
                            className={`flex w-full items-center gap-3 px-5 py-3 transition
              ${isLight
                                    ? "text-slate-700 hover:bg-slate-100"
                                    : "text-white hover:bg-slate-800"
                                }`}
                        >
                            <Moon size={18} />
                            Appearance
                        </button>

                        <button
                            onClick={logout}
                            className="flex w-full items-center gap-3 px-5 py-3 text-red-500 transition hover:bg-red-600 hover:text-white"
                        >
                            <LogOut size={18} />
                            Logout
                        </button>

                    </motion.div>

                )}

            </AnimatePresence>

        </div>
    );
}