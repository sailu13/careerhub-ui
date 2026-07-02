import { Outlet } from "react-router-dom";
import Navbar from "@/shared/components/layout/Navbar";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Outlet />
    </div>
  );
}