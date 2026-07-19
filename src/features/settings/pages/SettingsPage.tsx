import { useTheme } from "@/context/ThemeContext";
import AppCard from "@/shared/components/common/AppCard";
import PageHeader from "@/shared/components/common/PageHeader";

export default function SettingsPage(){
    const {theme, setTheme} = useTheme();

    return (
        <div className="space-y-8">
            <PageHeader title="Settings" subtitle="Customize your CareerHub experience" />
            <div className="p-8">
                <h2 className="mb-6 text-xl font-semibold">
                    Appearance
                </h2>
                <div className="grid gap-5 md:grid-cols-3">
                    {/*Light */}
                    <AppCard
                        onClick={() => setTheme("light")}
                        className={`p-6 ${theme === "light"
                                ? "ring-2 ring-blue-500"
                                : ""
                            }`}
                    >  
                        <div className="mb-4 h-28 rounded-lg bg-white border"></div>
                        <h3 className="font-semibold">Light</h3>
                        <p className="mt-2 text-sm text-slate-400">Bright Interface</p>
                    </AppCard>

                    {/*Dark */}
                    <AppCard
                        onClick={() => setTheme("dark")}
                        className={`p-6 ${theme === "dark"
                                ? "ring-2 ring-blue-500"
                                : ""
                            }`}
                    >  
                        <div className="mb-4 h-28 rounded-lg bg-white border"></div>
                        <h3 className="font-semibold">Dark</h3>
                        <p className="mt-2 text-sm text-slate-400">Easy on the eyes</p>
                    </AppCard>

                    {/*System */}
                    <AppCard
                        onClick={() => setTheme("system")}
                        className={`p-6 ${theme === "system"
                                ? "ring-2 ring-blue-500"
                                : ""
                            }`}
                    >                        
                            <div className="mb-4 flex h-28 overflow-hidden rounded-lg">
                            <div className="w-1/2 bg-white"></div>
                            <div className="w-1/2 bg-slate-900"></div>
                        </div>
                        <h3 className="font-semibold">System</h3>
                        <p className="mt-2 text-sm text-slate-400">Match your Device</p>
                    </AppCard>
                </div>
            </div>
        </div>
    );
}