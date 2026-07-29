import { useEffect, useState } from "react";
import { FileText, User, Briefcase, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "@/shared/components/common/PageHeader";
import LoadingSkeleton from "@/shared/components/common/LoadingSkeleton";
import StatCard from "@/shared/components/common/StatCard";
import AppCard from "@/shared/components/common/AppCard";
import { useAppTheme } from "@/shared/theme/theme";
import { getDashboard } from "../services/dashboardService";
import type { DashboardResponse } from "../types/dashboard";

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState<DashboardResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const t = useAppTheme();

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

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Resume"
          value={
            dashboard?.resumes
              ? "Uploaded"
              : "Not Uploaded"
          }
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

      <div>

        <h2 className={`mb-6 text-2xl font-bold ${t.heading}`}>
          Quick Actions
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {/* Profile */}

          <Link to="/profile" className="block">
            <AppCard
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex min-h-[250px] flex-col cursor-pointer hover:border-blue-500 hover:shadow-xl">

              <User size={34} className="mb-4 text-blue-500" />

              <h3 className={`text-lg font-semibold ${t.heading}`}>
                Update Profile
              </h3>

              <p className={`mt-2 h-12 text-sm ${t.subText}`}>
                Keep your personal information updated.
              </p>

              <div className="mt-auto flex items-center gap-2 pt-6 text-blue-500">
                Open <ArrowRight size={18} />
              </div>

            </AppCard>
          </Link>

          {/* Resume */}

          <Link to="/resume" className="block">
            <AppCard
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex min-h-[250px] flex-col cursor-pointer hover:border-green-500 hover:shadow-xl">

              <FileText size={34} className="mb-4 text-green-500" />

              <h3 className={`text-lg font-semibold ${t.heading}`}>
                Manage Resume
              </h3>

              <p className={`mt-2 h-12 text-sm ${t.subText}`}>
                Upload, Replace and Download your resume.
              </p>

              <div className="mt-auto flex items-center gap-2 pt-6 text-green-500">
                Open <ArrowRight size={18} />
              </div>

            </AppCard>
          </Link>

          {/* Jobs */}

          <Link to="/jobs" state={{ fromDashboard: true }} className="block">
            <AppCard whileHover={{ y: -8, scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="group flex min-h-[245px] flex-col cursor-pointer hover:border-orange-500 hover:shadow-xl">

              <Briefcase
                size={34}
                className="mb-4 text-orange-500"
              />

              <h3 className={`text-lg font-semibold ${t.heading}`}>
                Browse Jobs
              </h3>

              <p className={`mt-2 h-12 text-sm ${t.subText}`}>
                Explore latest Opportunities
              </p>

              <div className="mt-auto flex items-center gap-2 pt-6 text-orange-500">Open <ArrowRight size={18} /></div>

            </AppCard>
          </Link>

          {/* AI */}

          <Link to="/ai" className="block">
            <AppCard whileHover={{ y: -8, scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="group flex min-h-[245px] flex-col cursor-pointer hover:border-purple-500 hover:shadow-xl">


              <Sparkles
                size={34}
                className="mb-4 text-purple-500"
              />

              <h3 className={`text-lg font-semibold ${t.heading}`}>
                AI Resume Review
              </h3>

              <p className={`mt-2 h-12 text-sm ${t.subText}`}>
                Coming Soon
              </p>

            </AppCard>
          </Link>

        </div>

      </div>

    </div>
  );
}