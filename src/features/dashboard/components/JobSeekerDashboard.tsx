import PageHeader from "@/shared/components/common/PageHeader";
import DashboardStats from "./DashboardStats";
import JobSeekerQuickActions from "./JobSeekerQuickActions";
import { getDashboard } from "../services/dashboardService";
import { useEffect, useState } from "react";
import type { DashboardResponse } from "../types/dashboard";

export default function JobSeekerDashboard() {
  const [dashboard, setDashboard] = useState<DashboardResponse | null>(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    const response = await getDashboard();
    setDashboard(response.data.data);
  }

  return (
    <div className="space-y-8">

      <PageHeader
        title="Career Overview"
        subtitle="Welcome back! Here's your career progress."
      />

      <DashboardStats
        dashboard={dashboard}
        role="JOB_SEEKER"
      />

      <JobSeekerQuickActions />

    </div>
  );
}