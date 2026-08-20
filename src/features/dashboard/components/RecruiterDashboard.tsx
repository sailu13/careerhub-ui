import { useEffect, useState } from "react";

import PageHeader from "@/shared/components/common/PageHeader";

import DashboardStats from "./DashboardStats";
import RecruiterQuickActions from "./RecruiterQuickActions";

import { getDashboard } from "../services/dashboardService";
import type { DashboardResponse } from "../types/dashboard";

export default function RecruiterDashboard() {
  console.log("RecruiterDashboard rendered");
  const [dashboard, setDashboard] =
    useState<DashboardResponse | null>(null);

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
        title="Recruiter Dashboard"
        subtitle="Manage your jobs and applicants."
      />

      <DashboardStats
        dashboard={dashboard}
        role="RECRUITER"
      />

      <RecruiterQuickActions />

    </div>
  );
}