import type { ReactNode } from "react";
import { useAppTheme } from "@/shared/theme/theme";

type Props = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
};

export default function SectionTitle({
  title,
  subtitle,
  action,
}: Props) {
  const t = useAppTheme();

  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h2 className={`text-2xl font-bold ${t.heading}`}>
          {title}
        </h2>

        {subtitle && (
          <p className={`mt-1 ${t.subText}`}>
            {subtitle}
          </p>
        )}
      </div>

      {action}
    </div>
  );
}