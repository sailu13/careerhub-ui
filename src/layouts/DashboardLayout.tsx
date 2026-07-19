import { useTheme } from "@/context/ThemeContext";
import Navbar from "@/shared/components/layout/Navbar";
import Sidebar from "@/shared/components/layout/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <div className={`flex min-h-screen transition-colors duration-300 ${theme === "light"
      ? "bg-slate-100 text-slate-900"
      : "bg-slate-950 text-white"}`}>
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex flex-1 flex-col">
        <Navbar
          onMenuClick={() => setSidebarOpen(true)}
        />
        <main className={`flex-1 p-8 transition-colors duration-300 ${theme === "light"
          ? "bg-slate-100"
          : "bg-slate-950"}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}