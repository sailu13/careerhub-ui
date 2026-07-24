import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function StatusBadge({ children }: Props) {
  return (
    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
      {children}
    </span>
  );
}