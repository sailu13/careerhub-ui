import { toast } from "sonner";
import { useSearchParams } from "react-router-dom";

import BackButton from "@/shared/components/common/BackButton";
import LoadingSkeleton from "@/shared/components/common/LoadingSkeleton";
import PageHeader from "@/shared/components/common/PageHeader";
import AppCard from "@/shared/components/common/AppCard";

import ApplicantList from "../components/ApplicantList";
import { useApplicants } from "../hooks/useApplicants";

export default function ApplicantsPage() {
  const [params] = useSearchParams();

  const jobId = Number(params.get("jobId"));

  const {
    applicants,
    loading,
    shortlist,
    reject,
  } = useApplicants(jobId);

  async function handleShortlist(id: number) {
    await shortlist(id);
    toast.success("Applicant shortlisted");
  }

  async function handleReject(id: number) {
    await reject(id);
    toast.success("Applicant rejected");
  }

  function handleResume(url: string) {
    window.open(url, "_blank");
  }

  if (loading) {
    return (
      <div className="space-y-6 pt-4">
        <BackButton />
        <LoadingSkeleton className="h-12 w-72" />
        <LoadingSkeleton className="h-44 w-full" />
        <LoadingSkeleton className="h-44 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-8 pt-4">
      <BackButton />

      <PageHeader
        title="Applicants"
        subtitle="Manage all applicants for this job"
      />

      {applicants.length === 0 ? (
        <AppCard className="py-20 text-center">
          <h2 className="text-2xl font-bold">
            No Applicants Yet
          </h2>

          <p className="mt-3 text-slate-500">
            Applicants will appear here once someone applies.
          </p>
        </AppCard>
      ) : (
        <ApplicantList
          applicant={applicants}
          onShortList={handleShortlist}
          onReject={handleReject}
          onResume={handleResume}
        />
      )}
    </div>
  );
}