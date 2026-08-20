import { useAppTheme } from "@/shared/theme/theme";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "danger";
};

export default function PrimaryButton({ children, variant = "primary", className = "", ...props }: Props) {
  const t = useAppTheme();
  let styles = "";

  switch (variant) {
    case "secondary":
      styles =
        "bg-slate-200 text-slate-900 hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600";
      break;

    case "success":
      styles =
        "bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700";
      break;

    case "danger":
      styles =
        "bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700";
      break;

    default:
      styles = t.primaryButton;
  }

  return (
    <button {...props} className={` inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-medium
    transition disabled:cursor-not-allowed disabled:opacity-60 ${styles} ${className} `}>
      {children}
    </button>
  );
}