import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function SecondaryButton({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`
        rounded-lg
        border
        border-slate-300
        bg-white
        px-5
        py-2.5
        font-medium
        text-slate-700
        transition
        hover:bg-slate-100
        ${className}
      `}
    >
      {children}
    </button>
  );
}