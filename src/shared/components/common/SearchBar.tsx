import { Search } from "lucide-react";
import { useAppTheme } from "@/shared/theme/theme";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
}: Props) {
  const t = useAppTheme();

  return (
    <div className="relative">
      <Search
        size={18}
        className={`absolute left-3 top-1/2 -translate-y-1/2 ${t.subText}`}
      />

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-lg border py-3 pl-10 pr-4 transition ${t.input}`}
      />
    </div>
  );
}