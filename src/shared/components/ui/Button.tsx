import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useTheme } from "@/context/ThemeContext";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: Props) {
  const { theme } = useTheme();

  const isLight = theme === "light";

  const variantClass =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : isLight
      ? "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
      : "border border-slate-600 bg-slate-800 text-white hover:bg-slate-700";

  return (
    <button
      {...props}
      className={`w-full rounded-xl px-5 py-3 font-semibold transition-all duration-300
      ${variantClass}
      ${className ?? ""}`}
    >
      {children}
    </button>
  );
}