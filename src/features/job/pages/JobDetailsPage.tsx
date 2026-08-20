import { useNavigate, useParams } from "react-router-dom";
import {
  Briefcase,
  Building,
  Clock,
  IndianRupee,
  MapPin,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

import PageHeader from "@/shared/components/common/PageHeader";
import AppCard from "@/shared/components/common/AppCard";
import StatusBadge from "@/shared/components/common/StatusBadge";
import PrimaryButton from "@/shared/components/buttons/PrimaryButton";
import AppDialog from "@/shared/components/dialog/AppDialog";

import { useAppTheme } from "@/shared/theme/theme";
import { useJob } from "../hooks/useJob";

import { useApplyJob } from "@/features/application/hooks/useApplyJob";
import { useMyApplications } from "@/features/application/hooks/useMyApplications";

export default function JobDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const t = useAppTheme();

  // Get job details
  const { job, loading } = useJob(Number(id));

  // Apply job
  const {
    apply,
    loading: applying,
  } = useApplyJob();

  // Get current user's applications
  const {
    appliedJobs,
    reload: reloadApplications,
  } = useMyApplications();

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");

  const [dialogType, setDialogType] = useState<
    "success" | "error" | "warning" | "info"
  >("info");

  // Check whether current user already applied
  const alreadyApplied =
    job != null && appliedJobs.includes(job.id);

  // ==============================
  // Apply for Job
  // ==============================
  const handleApply = async () => {
    if (!job) return;

    try {
      const result = await apply(job.id);

      if (result.success) {
        setDialogType("success");
        setDialogTitle("Application Submitted");
        setDialogMessage(
          "Your application has been submitted successfully."
        );

        // Refresh applications so button becomes "Applied"
        await reloadApplications();
      } else {
        setDialogType("warning");
        setDialogTitle("Application");
        setDialogMessage(result.message);
      }
    } catch (error: any) {
      setDialogType("error");
      setDialogTitle("Application Failed");

      setDialogMessage(
        error?.response?.data?.message ||
          "Something went wrong while submitting your application."
      );
    }

    setDialogOpen(true);
  };

  // ==============================
  // Loading
  // ==============================
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className={t.subText}>Loading job details...</p>
      </div>
    );
  }

  // ==============================
  // Job Not Found
  // ==============================
  if (!job) {
    return (
      <div className="space-y-6">
        <PrimaryButton onClick={() => navigate(-1)}>
          <ArrowLeft size={18} />
          Back
        </PrimaryButton>

        <AppCard>
          <div className="py-10 text-center">
            <h2 className={`text-xl font-semibold ${t.text}`}>
              Job not found
            </h2>

            <p className={`mt-2 ${t.subText}`}>
              The job you are looking for does not exist or may have been removed.
            </p>
          </div>
        </AppCard>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* ==============================
          Header
      ============================== */}
      <div className="flex items-center gap-3">
        <PrimaryButton onClick={() => navigate(-1)}>
          <ArrowLeft size={18} />
          Back
        </PrimaryButton>

        <PageHeader
          title={job.title}
          subtitle={job.company}
        />
      </div>

      {/* ==============================
          Job Details
      ============================== */}
      <AppCard className="space-y-6">

        {/* Job Title */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className={`text-2xl font-bold ${t.text}`}>
              {job.title}
            </h2>

            <p className={t.subText}>
              {job.company}
            </p>
          </div>

          <StatusBadge>
            {job.employmentType.replace("_", " ")}
          </StatusBadge>
        </div>

        {/* ==============================
            Job Information
        ============================== */}
        <div className="grid gap-4 md:grid-cols-2">

          {/* Company */}
          <div className={`flex items-center gap-3 ${t.text}`}>
            <Building size={18} />
            <span>{job.company}</span>
          </div>

          {/* Location */}
          <div className={`flex items-center gap-3 ${t.text}`}>
            <MapPin size={18} />
            <span>{job.location}</span>
          </div>

          {/* Experience */}
          <div className={`flex items-center gap-3 ${t.text}`}>
            <Briefcase size={18} />
            <span>{job.experience}</span>
          </div>

          {/* Salary */}
          <div className={`flex items-center gap-3 ${t.text}`}>
            <IndianRupee size={18} />

            <span>
              {job.salaryMin} - {job.salaryMax}
            </span>
          </div>

          {/* Posted Date */}
          <div className={`flex items-center gap-3 ${t.text}`}>
            <Clock size={18} />

            <span>
              {new Date(job.postedAt).toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* ==============================
            Description
        ============================== */}
        <div>
          <h3 className={`text-lg font-semibold ${t.text}`}>
            Description
          </h3>

          <p className={`mt-2 whitespace-pre-line ${t.subText}`}>
            {job.description}
          </p>
        </div>

        {/* ==============================
            Skills
        ============================== */}
        <div>
          <h3 className={`text-lg font-semibold ${t.text}`}>
            Skills
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {job.skills.map((skill: string) => (
              <span
                key={skill}
                className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ==============================
            Apply Button
        ============================== */}
        <div className="pt-4">

          <PrimaryButton
            variant={alreadyApplied ? "success" : "primary"}
            onClick={handleApply}
            disabled={alreadyApplied || applying}
          >
            {alreadyApplied ? (
              <>
                <CheckCircle className="h-5 w-5" />
                <span>Applied</span>
              </>
            ) : applying ? (
              "Applying..."
            ) : (
              "Apply Now"
            )}
          </PrimaryButton>

        </div>
      </AppCard>

      {/* ==============================
          Application Dialog
      ============================== */}
      <AppDialog
        open={dialogOpen}
        type={dialogType}
        title={dialogTitle}
        message={dialogMessage}
        onClose={() => setDialogOpen(false)}
      />
    </div>
  );
}