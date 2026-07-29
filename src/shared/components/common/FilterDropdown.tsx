import { ChevronDown } from "lucide-react";
import { useAppTheme } from "@/shared/theme/theme";

type Props = {
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

export default function FilterDropdown({ value, options, onChange,}: Props) {
  const t = useAppTheme();

console.log("FilterDropdown received:", JSON.stringify(options, null, 2));
  return (
    <div className="relative">
      <select value={value} onChange={(e) => onChange(e.target.value)}
        className={` w-full appearance-none rounded-xl border px-4 py-3 pr-10 outline-none transition ${t.input} `} >
        {options.map((option) => (
          <option key={option} value={option} >
            {option}
          </option>
        ))}
      </select>

      <ChevronDown
        size={18}
        className={` pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 ${t.subText} `} />
    </div>
  );
}