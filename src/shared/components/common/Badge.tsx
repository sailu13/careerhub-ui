import type React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Badge({ children }: Props) {
  return (
    <span className="rounded-full bg-blue-600/20 px-3 py-1 text-sm font-medium text-blue-400">
      {children}
    </span>
  );
}