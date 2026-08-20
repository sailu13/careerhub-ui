import {
  FileText,
  Briefcase,
  User,
  Sparkles,
  Users,
  ClipboardList,
  Activity,
} from "lucide-react";

import StatCard from "@/shared/components/common/StatCard";
import type { DashboardResponse } from "../types/dashboard";

type Props = {
  dashboard: DashboardResponse | null;
  role: string | null;
};

export default function DashboardStats({
  dashboard,
  role,
}: Props) {
  // ================= JOB SEEKER =================

  if (role === "JOB_SEEKER") {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Resume"
          value={dashboard?.resumes ? "Uploaded" : "Not Uploaded"}
          icon={<FileText size={28} />}
          color="bg-green-600"
        />

        <StatCard
          title="Profile"
          value={`${dashboard?.profileCompletion ?? 0}%`}
          icon={<User size={28} />}
          color="bg-blue-600"
        />

        <StatCard
          title="Applications"
          value={`${dashboard?.applications ?? 0}`}
          icon={<Briefcase size={28} />}
          color="bg-orange-600"
        />

        <StatCard
          title="AI Review"
          value="Coming Soon"
          icon={<Sparkles size={28} />}
          color="bg-purple-600"
        />

      </div>
    );
  }

  // ================= RECRUITER =================

  if (role === "RECRUITER") {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Jobs Posted"
          value={`${dashboard?.jobsPosted ?? 0}`}
          icon={<ClipboardList size={28} />}
          color="bg-green-600"
        />

        <StatCard
          title="Active Jobs"
          value={`${dashboard?.activeJobs ?? 0}`}
          icon={<Activity size={28} />}
          color="bg-blue-600"
        />

        <StatCard
          title="Applicants"
          value={`${dashboard?.applicants ?? 0}`}
          icon={<Users size={28} />}
          color="bg-orange-600"
        />

        <StatCard
          title="Interviews"
          value="Coming Soon"
          icon={<Briefcase size={28} />}
          color="bg-purple-600"
        />

      </div>
    );
  }

  // ================= ADMIN =================

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Users"
        value={`${dashboard?.users ?? 0}`}
        icon={<Users size={28} />}
        color="bg-blue-600"
      />

      <StatCard
        title="Recruiters"
        value={`${dashboard?.recruiters ?? 0}`}
        icon={<User size={28} />}
        color="bg-green-600"
      />

      <StatCard
        title="Jobs"
        value={`${dashboard?.jobs ?? 0}`}
        icon={<ClipboardList size={28} />}
        color="bg-orange-600"
      />

      <StatCard
        title="Applications"
        value={`${dashboard?.applications ?? 0}`}
        icon={<Briefcase size={28} />}
        color="bg-purple-600"
      />

    </div>
  );
}