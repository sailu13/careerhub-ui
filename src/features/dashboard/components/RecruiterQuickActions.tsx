import {
  ArrowRight,
  ClipboardList,
  PlusCircle,
  Settings,
  Users,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

import AppCard from "@/shared/components/common/AppCard";
import { useAppTheme } from "@/shared/theme/theme";

export default function RecruiterQuickActions() {
  const t = useAppTheme();

  return (
    <div>

      <h2 className={`mb-6 text-2xl font-bold ${t.heading}`}>
        Recruiter Actions
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {/* Post Job */}

        <Link to="/post-job">
          <AppCard
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex min-h-[240px] flex-col cursor-pointer hover:border-green-500 hover:shadow-xl"
          >
            <PlusCircle
              size={34}
              className="mb-4 text-green-500"
            />

            <h3 className={`text-lg font-semibold ${t.heading}`}>
              Post Job
            </h3>

            <p className={`mt-2 flex-1 text-sm ${t.subText}`}>
              Create a new job opening.
            </p>

            <div className="mt-6 flex items-center gap-2 text-green-500">
              Open <ArrowRight size={18} />
            </div>

          </AppCard>
        </Link>

        {/* My Jobs */}

        <Link to="/my-jobs">
          <AppCard
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex min-h-[240px] flex-col cursor-pointer hover:border-blue-500 hover:shadow-xl"
          >
            <ClipboardList
              size={34}
              className="mb-4 text-blue-500"
            />

            <h3 className={`text-lg font-semibold ${t.heading}`}>
              My Jobs
            </h3>

            <p className={`mt-2 flex-1 text-sm ${t.subText}`}>
              Manage all your posted jobs.
            </p>

            <div className="mt-6 flex items-center gap-2 text-blue-500">
              Open <ArrowRight size={18} />
            </div>

          </AppCard>
        </Link>

        {/* Applicants */}

        <Link to="/applicants">
          <AppCard
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex min-h-[240px] flex-col cursor-pointer hover:border-purple-500 hover:shadow-xl"
          >
            <Users
              size={34}
              className="mb-4 text-purple-500"
            />

            <h3 className={`text-lg font-semibold ${t.heading}`}>
              Applicants
            </h3>

            <p className={`mt-2 flex-1 text-sm ${t.subText}`}>
              Review applications received.
            </p>

            <div className="mt-6 flex items-center gap-2 text-purple-500">
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
            <Settings
              size={34}
              className="mb-4 text-cyan-500"
            />

            <h3 className={`text-lg font-semibold ${t.heading}`}>
              Settings
            </h3>

            <p className={`mt-2 flex-1 text-sm ${t.subText}`}>
              Manage recruiter preferences.
            </p>

            <div className="mt-6 flex items-center gap-2 text-cyan-500">
              Open <ArrowRight size={18} />
            </div>

          </AppCard>
        </Link>

        {/* Analytics */}

        <Link to="#">
          <AppCard
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex min-h-[240px] flex-col cursor-pointer hover:border-orange-500 hover:shadow-xl"
          >
            <BarChart3
              size={34}
              className="mb-4 text-orange-500"
            />

            <h3 className={`text-lg font-semibold ${t.heading}`}>
              Analytics
            </h3>

            <p className={`mt-2 flex-1 text-sm ${t.subText}`}>
              Recruitment insights coming soon.
            </p>

            <div className="mt-6 flex items-center gap-2 text-orange-500">
              Coming Soon
            </div>

          </AppCard>
        </Link>

      </div>

    </div>
  );
}