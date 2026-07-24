import type { ReactNode } from "react";
import { useTheme } from "@/context/ThemeContext";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className,
}: Props) {
  const { theme } = useTheme();

  const isLight = theme === "light";

  return (
    <div
      className={`rounded-2xl border p-8 shadow-xl transition-all duration-300
      ${
        isLight
          ? "border-slate-200 bg-white text-slate-900 shadow-slate-200"
          : "border-slate-700 bg-slate-900 text-white shadow-black/30"
      }
      ${className ?? ""}`}
    >
      {children}
    </div>
  );
}