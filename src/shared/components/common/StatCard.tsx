import type { ReactNode } from "react";
import AppCard from "./AppCard";
import { useAppTheme } from "@/shared/theme/theme";

type Props = {
  title: string;
  value: string;
  icon: ReactNode;
  color: string;
};

export default function StatCard({
  title,
  value,
  icon,
  color,
}: Props) {
  const t = useAppTheme();

  return (
    <AppCard className="flex items-center gap-5">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-xl text-white ${color}`}
      >
        {icon}
      </div>

      <div>
        <p className={`text-sm ${t.subText}`}>
          {title}
        </p>

        <h3 className={`text-2xl font-bold ${t.heading}`}>
          {value}
        </h3>
      </div>
    </AppCard>
  );
}