import type { ReactNode } from "react";
import { motion, type MotionProps } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

type Props = MotionProps & {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
};

export default function AppCard({
    children,
    className = "",
    onClick,
    ...motionProps
}: Props) {

    const { theme } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -3 }}
            onClick={onClick}
            {...motionProps}
            className={`
                rounded-2xl
                border
                p-6
                shadow-sm
                transition-all
                duration-300

                ${
                    onClick
                        ? "cursor-pointer"
                        : ""
                }

                ${
                    theme === "light"
                        ? "border-slate-200 bg-white shadow-slate-200"
                        : "border-slate-700 bg-slate-900 shadow-black/30"
                }

                ${className}
            `}
        >
            {children}
        </motion.div>
    );
}