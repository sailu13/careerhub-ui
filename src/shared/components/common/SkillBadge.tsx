import { useAppTheme } from "@/shared/theme/theme";

type Props = { skill: string;};

export default function SkillBadge({ skill }: Props) {
  const t = useAppTheme();

  return (
    <span
      className={` rounded-full px-3 py-1 text-sm font-medium
        ${ t.isLight ? "bg-blue-100 text-blue-700" : "bg-blue-900/40 text-blue-300" } `} >
      {skill}
    </span>
  );
}