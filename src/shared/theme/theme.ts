import { useTheme } from "@/context/ThemeContext";

export function useAppTheme() {
  const { theme } = useTheme();

  const isLight = theme === "light";

  return {
    theme,
    isLight,

    /* ===============================
       Layout
    =============================== */

    background: isLight
      ? "bg-slate-100"
      : "bg-slate-950",

    page: isLight
      ? "bg-white"
      : "bg-slate-900",

    navbar: isLight
      ? "bg-white border-slate-200"
      : "bg-slate-950 border-slate-800",

    sidebar: isLight
      ? "bg-white border-slate-200"
      : "bg-slate-950 border-slate-800",

    card: isLight
      ? "bg-white border border-slate-200"
      : "bg-slate-900 border border-slate-800",

    /* ===============================
       Typography
    =============================== */

    heading: isLight
      ? "text-slate-900"
      : "text-white",

    text: isLight
      ? "text-slate-700"
      : "text-slate-300",

    subText: isLight
      ? "text-slate-500"
      : "text-slate-400",

    textMuted: isLight
      ? "text-slate-400"
      : "text-slate-500",

    inputLabel: isLight
      ? "text-slate-700"
      : "text-slate-300",

    /* ===============================
       Borders & Hover
    =============================== */

    border: isLight
      ? "border-slate-200"
      : "border-slate-700",

    divider: isLight
      ? "border-slate-200"
      : "border-slate-700",

    hover: isLight
      ? "hover:bg-slate-100"
      : "hover:bg-slate-800",

    /* ===============================
       Forms
    =============================== */

    input: isLight
      ? "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400"
      : "bg-slate-900 border-slate-700 text-white placeholder:text-slate-500",

    uploadArea: isLight
      ? "border-slate-300 bg-slate-50 hover:bg-slate-100"
      : "border-slate-700 bg-slate-900 hover:bg-slate-800",

    uploadText: isLight
      ? "text-slate-700"
      : "text-slate-300",

    /* ===============================
       Icons
    =============================== */

    icon: isLight
      ? "text-slate-700"
      : "text-white",

    iconSecondary: isLight
      ? "text-slate-500"
      : "text-slate-400",

    /* ===============================
       Status
    =============================== */

    successText: "text-green-600",

    warningText: "text-yellow-600",

    dangerText: "text-red-600",

    infoText: "text-blue-600",

    pageBackground: isLight
      ? "bg-gradient-to-br from-slate-50 via-white to-slate-100"
      : "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950",

    primaryButton:
      "inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700",

    successButton:
      "inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 font-medium text-white transition hover:bg-green-700",

    dangerButton:
      "inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 font-medium text-white transition hover:bg-red-700",

    secondaryButton: isLight
      ? "inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 font-medium text-slate-700 transition hover:bg-slate-100"
      : "inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 font-medium text-white transition hover:bg-slate-700",

    hoverCard: isLight
      ? "transition-all hover:border-blue-400 hover:shadow-xl"
      : "transition-all hover:border-blue-500 hover:shadow-xl",

    settingCard: isLight
      ? "cursor-pointer border border-slate-200 bg-white transition-all hover:scale-[1.02] hover:shadow-lg"
      : "cursor-pointer border border-slate-700 bg-slate-900 transition-all hover:scale-[1.02] hover:shadow-lg",
  };
}