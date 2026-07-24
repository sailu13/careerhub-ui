import type { ReactNode } from "react";
import { useAppTheme } from "@/shared/theme/theme";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Text({
  children,
  className = "",
}: Props) {
  const t = useAppTheme();

  return (
    <p
      className={`${t.subText} ${className}`}
    >
      {children}
    </p>
  );
}