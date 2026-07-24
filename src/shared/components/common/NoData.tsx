import type { ReactNode } from "react";
import { Inbox } from "lucide-react";
import { useAppTheme } from "@/shared/theme/theme";

type Props = {
  title?: string;
  description?: string;
  icon?: ReactNode;
};

export default function NoData({
  title = "No Data Available",
  description = "Nothing to display right now.",
  icon,
}: Props) {
  const t = useAppTheme();

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl border p-10 text-center ${t.card}`}
    >
      <div className="mb-4 text-blue-500">
        {icon ?? <Inbox size={48} />}
      </div>

      <h3 className={`text-lg font-semibold ${t.heading}`}>
        {title}
      </h3>

      <p className={`mt-2 max-w-sm text-sm ${t.subText}`}>
        {description}
      </p>
    </div>
  );
}