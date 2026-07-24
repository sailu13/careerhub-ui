import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import { useTheme } from "@/context/ThemeContext";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, className, ...props }, ref) => {
    const { theme } = useTheme();

    const isLight = theme === "light";

    return (
      <div>
        <input
          ref={ref}
          {...props}
          className={`mt-2 w-full rounded-xl border px-4 py-3 outline-none transition
          ${
            error
              ? "border-red-500"
              : isLight
              ? "border-slate-300 bg-white text-slate-900 focus:border-blue-500"
              : "border-slate-700 bg-slate-800 text-white focus:border-blue-500"
          }
          ${className ?? ""}`}
        />

        {error && (
          <p className="mt-2 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;