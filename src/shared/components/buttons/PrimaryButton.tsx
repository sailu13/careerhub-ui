import { useAppTheme } from "@/shared/theme/theme";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary"
};

export default function PrimaryButton({children, variant = "primary", className = "", ...props}: Props) {
  const t= useAppTheme();
  const styles = variant === "secondary"
      ? "bg-slate-200 text-slate-900 hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
      : t.primaryButton;
      
  return (
    <button {...props} className={`rounded-lg px-5 py-3 font-medium transition ${styles} ${className}`} >
      {children}
    </button>
  );
}