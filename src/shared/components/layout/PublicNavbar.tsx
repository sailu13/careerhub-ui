import { Link, useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function PublicNavbar() {
  const navigate = useNavigate();

  const { theme, setTheme } = useTheme();

  const isLight = theme === "light";

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        isLight
          ? "border-slate-200 bg-white"
          : "border-slate-800 bg-slate-950"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}

        <Link
          to="/"
          className={`text-3xl font-bold ${
            isLight ? "text-blue-600" : "text-blue-500"
          }`}
        >
          CareerHub
        </Link>

        {/* Navigation */}

        <div className="hidden items-center gap-10 md:flex">

          <a
            href="#features"
            className={`transition ${
              isLight
                ? "text-slate-700 hover:text-blue-600"
                : "text-slate-300 hover:text-blue-400"
            }`}
          >
            Features
          </a>

          <a
            href="#companies"
            className={`transition ${
              isLight
                ? "text-slate-700 hover:text-blue-600"
                : "text-slate-300 hover:text-blue-400"
            }`}
          >
            Companies
          </a>

          {/* Theme Toggle */}

          <button
            onClick={() =>
              setTheme(theme === "light" ? "dark" : "light")
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

          {/* Login */}

          <button
            onClick={() => navigate("/login")}
            className={`font-semibold transition ${
              isLight
                ? "text-slate-700 hover:text-blue-600"
                : "text-white hover:text-blue-400"
            }`}
          >
            Login
          </button>

          {/* Signup */}

          <button
            onClick={() => navigate("/register")}
            className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Sign Up
          </button>

        </div>
      </div>
    </header>
  );
}