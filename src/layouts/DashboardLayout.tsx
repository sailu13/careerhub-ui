import Navbar from "@/shared/components/layout/Navbar";
import Sidebar from "@/shared/components/layout/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useAppTheme } from "@/shared/theme/theme";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const t = useAppTheme();

  return (
    <div className={`min-h-screen ${t.background}`}>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Navbar onMenuClick={() => setSidebarOpen(true)} />

      <div className="ml-72">
        <main className={`pt-20 min-h-screen p-8 ${t.background}`} ><Outlet /></main>
      </div>
    </div>
  );
}