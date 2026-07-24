import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function InfoGrid({
  children,
}: Props) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {children}
    </div>
  );
}