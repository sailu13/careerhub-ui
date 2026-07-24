import { useAppTheme } from "@/shared/theme/theme";
import { useLocation } from "react-router-dom";

export default function NavbarTitle() {
    const t = useAppTheme();
    const location = useLocation();
    const titles: Record<string, string> = {
        "/dashboard": "Dashboard",
        "/profile": "Profile",
        "/resume": "Resume",
        "/jobs": "Jobs",
        "/settings": "Settings",
        "/ai-review": "AI Resume Review"
    };
    const subtitles: Record<string, string> = {
        "/dashboard": "Welcome Back",
        "/profile": "Manage your Profile",
        "/resume": "Manage your Resume",
        "/settings": "Customize your experience",
        "/jobs": "Find your next Opportunity",
        "/ai-review": "Imporve your resume with AI"
    };

    return (
        <div>
            <h1 className={`text-2xl font-bold ${t.heading}`}>
                {titles[location.pathname] ?? "CareerHub"}
            </h1>
            <p className={t.subText}>{subtitles[location.pathname] ?? ""}</p>
        </div>
    );
}