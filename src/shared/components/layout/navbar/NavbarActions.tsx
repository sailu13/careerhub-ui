import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/context/ThemeContext";

import UserDropdown from "../UserDropdown";
import NotificationBell from "./NotificationBell";

export default function NavbarActions() {
  const { theme, setTheme } = useTheme();

  const isLight = theme === "light";

  return (
    <div className="flex items-center gap-4">

      <NotificationBell count={2} />

      {/* Theme Toggle */}

      <button
        type="button"
        onClick={() =>
          setTheme(isLight ? "dark" : "light")
        }
        className={`rounded-lg p-2 transition ${
          isLight
            ? "hover:bg-slate-100"
            : "hover:bg-slate-800"
        }`}
      >
        {isLight ? (
          <Moon
            size={20}
            className="text-slate-700"
          />
        ) : (
          <Sun
            size={20}
            className="text-yellow-400"
          />
        )}
      </button>

      <UserDropdown />

    </div>
  );
}