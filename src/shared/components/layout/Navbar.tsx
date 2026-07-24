import { Menu } from "lucide-react";

import { useTheme } from "@/context/ThemeContext";

import NavbarTitle from "./navbar/NavbarTitle";
import NavbarActions from "./navbar/NavbarActions";

type Props = {
  onMenuClick: () => void;
};

export default function Navbar({
  onMenuClick,
}: Props) {
  const { theme } = useTheme();

  const isLight = theme === "light";

  return (
    <header className={` fixed top-0 right-0 left-72 z-30 flex h-20 items-center justify-between border-b px-8 
      transition-colors duration-300 ${ isLight ? "border-slate-200 bg-white" : "border-slate-800 bg-slate-950" } `} >
      {/* Left */}

      <div className="flex items-center gap-5">

        <button type="button" onClick={onMenuClick} className={` rounded-lg p-2 transition lg:hidden
          ${ isLight ? "hover:bg-slate-100" : "hover:bg-slate-800" } `} >
          <Menu size={22} className={ isLight ? "text-slate-700" : "text-white" } />
        </button>

        <NavbarTitle />

      </div>

      {/* Right */}

      <NavbarActions />

    </header>
  );
}