import {
  ArrowRight,
  Briefcase,
  FileText,
  Sparkles,
  User,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

import AppCard from "@/shared/components/common/AppCard";
import { useAppTheme } from "@/shared/theme/theme";

export default function JobSeekerQuickActions() {
  const t = useAppTheme();

  return (
    <div>

      <h2 className={`mb-6 text-2xl font-bold ${t.heading}`}>
        Quick Actions
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {/* Update Profile */}

        <Link to="/profile">
          <AppCard
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex min-h-[240px] flex-col cursor-pointer hover:border-blue-500 hover:shadow-xl"
          >
            <User size={34} className="mb-4 text-blue-500" />

            <h3 className={`text-lg font-semibold ${t.heading}`}>
              Update Profile
            </h3>

            <p className={`mt-2 flex-1 text-sm ${t.subText}`}>
              Update your personal information and profile details.
            </p>

            <div className="mt-6 flex items-center gap-2 text-blue-500">
              Open <ArrowRight size={18} />
            </div>
          </AppCard>
        </Link>

        {/* Resume */}

        <Link to="/resume">
          <AppCard
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex min-h-[240px] flex-col cursor-pointer hover:border-green-500 hover:shadow-xl"
          >
            <FileText size={34} className="mb-4 text-green-500" />

            <h3 className={`text-lg font-semibold ${t.heading}`}>
              Manage Resume
            </h3>

            <p className={`mt-2 flex-1 text-sm ${t.subText}`}>
              Upload, replace and download your latest resume.
            </p>

            <div className="mt-6 flex items-center gap-2 text-green-500">
              Open <ArrowRight size={18} />
            </div>
          </AppCard>
        </Link>

        {/* Browse Jobs */}

        <Link to="/jobs">
          <AppCard
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex min-h-[240px] flex-col cursor-pointer hover:border-orange-500 hover:shadow-xl"
          >
            <Briefcase size={34} className="mb-4 text-orange-500" />

            <h3 className={`text-lg font-semibold ${t.heading}`}>
              Browse Jobs
            </h3>

            <p className={`mt-2 flex-1 text-sm ${t.subText}`}>
              Explore the latest job opportunities matching your skills.
            </p>

            <div className="mt-6 flex items-center gap-2 text-orange-500">
              Open <ArrowRight size={18} />
            </div>
          </AppCard>
        </Link>

        {/* My Applications */}

        <Link to="/applications">
          <AppCard
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex min-h-[240px] flex-col cursor-pointer hover:border-indigo-500 hover:shadow-xl"
          >
            <Briefcase size={34} className="mb-4 text-indigo-500" />

            <h3 className={`text-lg font-semibold ${t.heading}`}>
              My Applications
            </h3>

            <p className={`mt-2 flex-1 text-sm ${t.subText}`}>
              Track every job you've applied for.
            </p>

            <div className="mt-6 flex items-center gap-2 text-indigo-500">
              Open <ArrowRight size={18} />
            </div>
          </AppCard>
        </Link>

        {/* Settings */}

        <Link to="/settings">
          <AppCard
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex min-h-[240px] flex-col cursor-pointer hover:border-cyan-500 hover:shadow-xl"
          >
            <Settings size={34} className="mb-4 text-cyan-500" />

            <h3 className={`text-lg font-semibold ${t.heading}`}>
              Settings
            </h3>

            <p className={`mt-2 flex-1 text-sm ${t.subText}`}>
              Manage your account preferences and security.
            </p>

            <div className="mt-6 flex items-center gap-2 text-cyan-500">
              Open <ArrowRight size={18} />
            </div>
          </AppCard>
        </Link>

        {/* AI Review */}

        <Link to="/ai-review">
          <AppCard
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex min-h-[240px] flex-col cursor-pointer hover:border-purple-500 hover:shadow-xl"
          >
            <Sparkles size={34} className="mb-4 text-purple-500" />

            <h3 className={`text-lg font-semibold ${t.heading}`}>
              AI Resume Review
            </h3>

            <p className={`mt-2 flex-1 text-sm ${t.subText}`}>
              AI-powered resume analysis is coming soon.
            </p>

            <div className="mt-6 flex items-center gap-2 text-purple-500">
              Coming Soon
            </div>
          </AppCard>
        </Link>

      </div>
    </div>
  );
}