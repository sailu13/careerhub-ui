import { useTheme } from "@/context/ThemeContext";
import AppCard from "@/shared/components/common/AppCard";
import PageHeader from "@/shared/components/common/PageHeader";
import { useAppTheme } from "@/shared/theme/theme";

export default function SettingsPage() {
  const { setTheme, theme } = useTheme();
  const t = useAppTheme();

  return (
    <div className="space-y-8">
      <PageHeader
        title="Settings"
        subtitle="Customize your CareerHub experience"
      />

      <div>
        <h2 className={`mb-6 text-xl font-semibold ${t.heading}`}>
          Appearance
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {/* Light */}
          <AppCard
            onClick={() => setTheme("light")}
            className={`${t.settingCard} ${
              theme === "light"
                ? "ring-2 ring-blue-500"
                : ""
            }`}
          >
            <div className="mb-4 h-28 rounded-lg border bg-white" />

            <h3 className={`font-semibold ${t.heading}`}>
              Light
            </h3>

            <p className={t.subText}>
              Bright Interface
            </p>
          </AppCard>

          {/* Dark */}
          <AppCard
            onClick={() => setTheme("dark")}
            className={`cursor-pointer transition-all hover:scale-[1.02] ${
              theme === "dark"
                ? "ring-2 ring-blue-500"
                : ""
            }`}
          >
            <div className="mb-4 h-28 rounded-lg border bg-slate-900" />

            <h3 className={t.heading}>
              Dark
            </h3>

            <p className={t.subText}>
              Easy on the eyes
            </p>
          </AppCard>

          {/* System */}
          <AppCard
            onClick={() => setTheme("system")}
            className={`cursor-pointer transition-all hover:scale-[1.02] ${
              theme === "system"
                ? "ring-2 ring-blue-500"
                : ""
            }`}
          >
            <div className="mb-4 flex h-28 overflow-hidden rounded-lg border">
              <div className="w-1/2 bg-white"></div>
              <div className="w-1/2 bg-slate-900"></div>
            </div>

            <h3 className={t.heading}>
              System
            </h3>

            <p className={t.subText}>
              Match your device
            </p>
          </AppCard>

        </div>
      </div>
    </div>
  );
}