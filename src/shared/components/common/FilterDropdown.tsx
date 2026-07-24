import { useAppTheme } from "@/shared/theme/theme";

type Option = {
  label: string;
  value: string;
};

type Props = {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
};

export default function FilterDropdown({
  value,
  onChange,
  options,
}: Props) {
  const t = useAppTheme();

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full rounded-lg border px-4 py-3 transition ${t.input}`}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}