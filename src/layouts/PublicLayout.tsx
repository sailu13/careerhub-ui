import { Outlet } from "react-router-dom";
import PublicNavbar from "@/shared/components/layout/PublicNavbar";
import { useAppTheme } from "@/shared/theme/theme";

export default function PublicLayout() {

  const t = useAppTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${t.page}`}>

      <PublicNavbar />

      <Outlet />

    </div>
  );
}