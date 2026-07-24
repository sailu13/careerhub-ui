import type { ReactNode } from "react";
import { useAppTheme } from "@/shared/theme/theme";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function EmptyState({
  icon,
  title,
  description,
}: Props) {
  const t = useAppTheme();

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-5 text-blue-500">
        {icon}
      </div>

      <h2 className={`text-2xl font-semibold ${t.heading}`}>
        {title}
      </h2>

      <p className={`mt-3 max-w-md ${t.subText}`}>
        {description}
      </p>
    </div>
  );
}