import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function SuccessButton({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`
        rounded-lg
        bg-green-600
        px-5
        py-2.5
        font-medium
        text-white
        transition
        hover:bg-green-700
        ${className}
      `}
    >
      {children}
    </button>
  );
}