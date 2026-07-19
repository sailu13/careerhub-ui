import { useEffect, useState } from "react";
import {
  FileText,
  User,
  Briefcase,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import PageHeader from "@/shared/components/common/PageHeader";
import LoadingSkeleton from "@/shared/components/common/LoadingSkeleton";
import StatCard from "@/shared/components/common/StatCard";

import { getDashboard } from "../services/dashboardService";
import type { DashboardResponse } from "../types/dashboard";
import AppCard from "@/shared/components/common/AppCard";

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState<DashboardResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const response = await getDashboard();
      setDashboard(response.data.data);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <LoadingSkeleton className="h-12 w-64" />
        <LoadingSkeleton className="h-40 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title="Career Overview"
        subtitle="Track your career journey"
      />

      {/* Statistics */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Resume"
          value={dashboard?.resumes ? "Uploaded" : "Not Uploaded"}
          icon={<FileText size={28} />}
          color="bg-green-600"
        />

        <StatCard
          title="Profile"
          value={`${dashboard?.profileCompletion}%`}
          icon={<User size={28} />}
          color="bg-blue-600"
        />

        <StatCard
          title="Applications"
          value={`${dashboard?.applications}`}
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

      {/* Quick Actions */}
      <div className="mt-10">
        <h2 className="mb-6 text-2xl font-bold">
          Quick Actions
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {/* Profile */}
          <AppCard
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={() =>
              navigate("/profile", {
                state: { fromDashboard: true },
              })
            }
            className="group hover:border-blue-500 hover:shadow-lg">
            <User className="mb-4 text-blue-500" size={34} />

            <h3 className="text-lg font-semibold">
              Update Profile
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Keep your personal information updated.
            </p>

            <div className="mt-5 flex items-center gap-2 text-blue-400">
              Open <ArrowRight size={18} />
            </div>
          </AppCard>

          {/* Resume */}
          <AppCard
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              navigate("/resume", {
                state: { fromDashboard: true },
              })
            }
            className="group hover:border-green-500 hover:shadow-lg">
            <FileText size={34} className="mb-4 text-green-500" />

            <h3 className="text-lg font-semibold">
              Manage Resume
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Upload, Replace and Download your resume.
            </p>

            <div className="mt-5 flex items-center gap-2 text-green-400">
              Open <ArrowRight size={18} />
            </div>
          </AppCard>

          {/* Jobs */}
          <AppCard
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            // onClick={() =>
            //   navigate("/resume", {
            //     state: { fromDashboard: true },
            //   })
            // }
            className="opacity-70 cursor-default">

            <h3 className="text-lg font-semibold">
              Browse Jobs
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Coming Soon
            </p>
          </AppCard>

          {/* AI Review */}
          <AppCard
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            // onClick={() =>
            //   navigate("/resume", {
            //     state: { fromDashboard: true },
            //   })
            // }
            className="opacity-70 cursor-default">
            <h3 className="text-lg font-semibold">
              AI Resume Review
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Coming Soon
            </p>

          </AppCard>
        </div>
      </div>
    </div>
  );
}