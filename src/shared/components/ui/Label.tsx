import type { LabelHTMLAttributes } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function Label({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  const { theme } = useTheme();

  return (
    <label
      {...props}
      className={`mb-2 block text-sm font-medium
      ${
        theme === "light"
          ? "text-slate-700"
          : "text-slate-300"
      }
      ${className ?? ""}`}
    />
  );
}