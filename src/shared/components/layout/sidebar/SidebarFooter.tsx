import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppTheme } from "@/shared/theme/theme";

export default function SidebarFooter() {
  const navigate = useNavigate();
  const t = useAppTheme();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("userId");

    navigate("/login", { replace: true });
  }

  return (
    <footer
      className={` mt-auto border-t p-4 ${t.border} `} >
      <button
        onClick={handleLogout}
        className={` flex w-full items-center gap-3 rounded-xl px-4 py-3 font-medium text-red-500 
            transition-all duration-200 hover:bg-red-500 hover:text-white `} >
        <LogOut size={20} />
        Logout
      </button>
    </footer>
  );
}