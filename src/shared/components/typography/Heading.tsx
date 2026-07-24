import type { ReactNode } from "react";
import { useAppTheme } from "@/shared/theme/theme";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Heading({
  children,
  className = "",
}: Props) {
  const t = useAppTheme();

  return (
    <h2
      className={`font-bold ${t.heading} ${className}`}
    >
      {children}
    </h2>
  );
}