import { Bell, Moon, Menu } from "lucide-react";
import UserDropdown from "./UserDropdown";
import { useTheme } from "@/context/ThemeContext";

type Props = {
  onMenuClick: () => void;
};

export default function Navbar({ onMenuClick }: Props) {
  const { theme, setTheme } = useTheme();

  const isLight = theme === "light";

  return (
    <header
      className={`flex items-center justify-between border-b px-6 py-4 transition-colors
      ${
        isLight
          ? "bg-white border-slate-200"
          : "bg-slate-950 border-slate-800"
      }`}
    >
      {/* Left */}

      <div className="flex items-center gap-4">

        <button
          onClick={onMenuClick}
          className={`rounded-lg p-2 transition lg:hidden
          ${
            isLight
              ? "hover:bg-slate-100"
              : "hover:bg-slate-800"
          }`}
        >
          <Menu
            size={22}
            className={isLight ? "text-slate-700" : "text-white"}
          />
        </button>

        <div>
          <h1
            className={`text-xl font-bold ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            Dashboard
          </h1>

          <p
            className={`text-sm ${
              isLight ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Welcome back
          </p>
        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Notification */}

        <button
          className={`relative rounded-lg p-2 transition
          ${
            isLight
              ? "hover:bg-slate-100"
              : "hover:bg-slate-800"
          }`}
        >
          <Bell
            size={22}
            className={isLight ? "text-slate-700" : "text-white"}
          />

          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
            2
          </span>
        </button>

        {/* Theme */}

        <button
          onClick={()=> setTheme(theme=== "dark" ? "light" : "dark")}
          className={`rounded-lg p-2 transition
          ${
            isLight
              ? "hover:bg-slate-100"
              : "hover:bg-slate-800"
          }`}
        >
          <Moon
            size={20}
            className={isLight ? "text-slate-700" : "text-white"}
          />
        </button>

        <UserDropdown />

      </div>

    </header>
  );
}