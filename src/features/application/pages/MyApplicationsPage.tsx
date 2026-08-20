import { FileText } from "lucide-react";

import PageHeader from "@/shared/components/common/PageHeader";
import SectionTitle from "@/shared/components/common/SectionTitle";
import EmptyState from "@/shared/components/common/EmptyState";

import ApplicationCard from "../components/ApplicationCard";
import { useMyApplications } from "../hooks/useMyApplications";
import type { Application } from "../types/application";

export default function MyApplicationsPage() {
  const {
    applications,
    loading,
  } = useMyApplications();

  if (loading) {
    return (
      <div className="py-10 text-center">
        Loading applications...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <PageHeader
        title="My Applications"
        subtitle="Track the jobs you have applied for."
      />

      <SectionTitle
        title="Applications"
        subtitle={`${applications.length} Applications`}
      />

      {applications.length === 0 ? (

        <EmptyState
          title="No applications yet"
          description="You haven't applied for any jobs yet. Start exploring opportunities and apply for jobs that match your skills."
          icon={<FileText size={64} />}
        />

      ) : (

        <div className="grid gap-6">
          {applications.map((application: Application) => (
            <ApplicationCard
              key={application.id}
              application={application}
            />
          ))}
        </div>

      )}

    </div>
  );
}