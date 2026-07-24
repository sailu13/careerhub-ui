import { useAppTheme } from "@/shared/theme/theme";
import { Bell } from "lucide-react";

type Props = {
    count?: number;
};

export default function NotificationBell({count=0}: Props) {
    const t = useAppTheme();

    return (
        <button className={`relative rounded-lg p-2 transition ${t.hover}`}>
            <Bell size={18} className={t.icon} />
            {count > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center 
                   rounded-full bg-red-500 text-[10px] font-semibold text-white"> {count}</span>
            )}
        </button>
    );
}