import PageHeader from "@/shared/components/common/PageHeader";
import DashboardStats from "./DashboardStats";
import RecruiterQuickActions from "./RecruiterQuickActions";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Admin Dashboard"
        subtitle="Manage the CareerHub platform"
      />

      <DashboardStats
        dashboard={null}
        role="ADMIN"
      />

      <RecruiterQuickActions />

    </div>
  );
}