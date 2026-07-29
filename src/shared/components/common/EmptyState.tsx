import type { ReactNode } from "react";
import { SearchX } from "lucide-react";
import { useAppTheme } from "@/shared/theme/theme";

type Props = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export default function EmptyState({ title, description, icon,}: Props) {
  const t = useAppTheme();

  return (
    <div
      className={` flex flex-col items-center justify-center rounded-2xl border px-8 py-16 text-center ${t.card} ${t.border} `} >
      <div className="mb-5 text-blue-500">
        {icon ?? <SearchX size={64} />}
      </div>

      <h2 className={`text-2xl font-bold ${t.heading}`}>
        {title}
      </h2>

      <p className={`mt-3 max-w-md ${t.subText}`}>
        {description}
      </p>
    </div>
  );
}