import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

type Props = {
  to: string;
  label: string;
  Icon: LucideIcon;
  onClick?: () => void;
};

export function SidebarItem({
  to,
  label,
  Icon,
  onClick,
}: Props) {

  const { theme } = useTheme();

  const isLight = theme === "light";

  return (
    <NavLink to={to}>
      {({ isActive }) => (

        <div
          onClick={onClick}
          className={`relative flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300

          ${
            isActive
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
              : isLight
              ? "text-slate-700 hover:bg-slate-100 hover:translate-x-1"
              : "text-slate-300 hover:bg-slate-800 hover:translate-x-1"
          }`}
        >

          {isActive && (
            <div className="absolute left-0 top-2 h-8 w-1 rounded-r bg-white" />
          )}

          <Icon size={22} />

          <span className="font-medium">
            {label}
          </span>

        </div>

      )}
    </NavLink>
  );
}