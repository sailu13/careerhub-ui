import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function PrimaryButton({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`
        rounded-lg
        bg-blue-600
        px-5
        py-2.5
        font-medium
        text-white
        transition
        hover:bg-blue-700
        ${className}
      `}
    >
      {children}
    </button>
  );
}