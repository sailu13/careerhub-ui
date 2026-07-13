import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export default function Input({
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <div>
      <input
        {...props}
        className={`w-full rounded-lg border bg-slate-800 px-4 py-3 text-white outline-none transition ${
          error
            ? "border-red-500"
            : "border-slate-700 focus:border-blue-500"
        } ${className}`}
      />

      {error && (
        <p className="mt-1 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}