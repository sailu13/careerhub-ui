import {
  LayoutDashboard,
  User,
  FileText,
  Briefcase,
  Settings,
  Sparkles,
} from "lucide-react";

import { SidebarItem } from "../SidebarItem";

type Props = {
  onClose: () => void;
};

export default function SidebarMenu({ onClose }: Props) {
  return (
    <nav className="flex-1 overflow-y-auto p-4">

      <div className="space-y-2">

        <SidebarItem
          to="/dashboard"
          label="Dashboard"
          Icon={LayoutDashboard}
          onClick={onClose}
        />

        <SidebarItem
          to="/profile"
          label="Profile"
          Icon={User}
          onClick={onClose}
        />

        <SidebarItem
          to="/resume"
          label="Resume"
          Icon={FileText}
          onClick={onClose}
        />

        <SidebarItem
          to="/jobs"
          label="Jobs"
          Icon={Briefcase}
          onClick={onClose}
        />

        <SidebarItem
          to="/ai-review"
          label="AI Review"
          Icon={Sparkles}
          onClick={onClose}
        />

        <SidebarItem
          to="/settings"
          label="Settings"
          Icon={Settings}
          onClick={onClose}
        />

      </div>

    </nav>
  );
}