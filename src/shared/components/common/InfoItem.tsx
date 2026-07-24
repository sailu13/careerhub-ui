import type { ReactNode } from "react";

import { useAppTheme } from "@/shared/theme/theme";

type Props = {
  icon: ReactNode;
  label: string;
  value: string;
};

export default function InfoItem({
  icon,
  label,
  value,
}: Props) {
  const t = useAppTheme();

  return (
    <div className="flex items-start gap-3">

      <div className="mt-1 text-blue-500">
        {icon}
      </div>

      <div>

        <p className={`text-sm ${t.subText}`}>
          {label}
        </p>

        <p className={`font-medium ${t.heading}`}>
          {value}
        </p>

      </div>

    </div>
  );
}