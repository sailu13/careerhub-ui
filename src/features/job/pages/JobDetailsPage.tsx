import { useNavigate, useParams } from "react-router-dom";
import {
  Briefcase,
  Building,
  Clock,
  IndianRupee,
  MapPin,
  ArrowLeft,
} from "lucide-react";

import PageHeader from "@/shared/components/common/PageHeader";
import AppCard from "@/shared/components/common/AppCard";
import StatusBadge from "@/shared/components/common/StatusBadge";
import PrimaryButton from "@/shared/components/buttons/PrimaryButton";

import { useAppTheme } from "@/shared/theme/theme";
import { useJob } from "../hooks/useJob";
import { useApplyJob } from "@/features/application/hooks/useApplyJob";

export default function JobDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const t = useAppTheme();
  const { job, loading } = useJob(Number(id));
  const { apply, loading: applying } = useApplyJob();
  const handleApply = async () => {
    if (!job) return;
    const result = await apply(job.id);
    if (result.success) {
      alert("Application submitted successfully!");
    } else {
      alert(result.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!job) return <div>Job not found.</div>;

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <PrimaryButton onClick={() => navigate(-1)}>
          <ArrowLeft size={18} />
          Back
        </PrimaryButton>
        <PageHeader title={job.title} subtitle={job.company} />
      </div>

      <AppCard className="space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className={`text-2xl font-bold ${t.text}`}> {job.title} </h2>
            <p className={`${t.subText}`}> {job.company} </p>
          </div>
          <StatusBadge> {job.employmentType.replace("_", " ")} </StatusBadge>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className={`flex items-center gap-3 ${t.text}`}>
            <Building size={18} />
            {job.company}
          </div>
          <div className={`flex items-center gap-3 ${t.text}`}>
            <MapPin size={18} />
            {job.location}
          </div>
          <div className={`flex items-center gap-3 ${t.text}`}>
            <Briefcase size={18} />
            {job.experience}
          </div>
          <div className={`flex items-center gap-3 ${t.text}`}>
            <IndianRupee size={18} />
            {job.salary}
          </div>
          <div className={`flex items-center gap-3 ${t.text}`}>
            <Clock size={18} />
            {new Date(job.postedAt).toLocaleDateString()}
          </div>
        </div>
        <div>
          <h3 className={`text-lg font-semibold ${t.text}`}> Description </h3>
          <p className={t.subText}> {job.description} </p>
        </div>
        <div>
          <h3 className={`text-lg font-semibold ${t.text}`}> Skills </h3>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill: string) => (
              <span key={skill} className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700" >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <PrimaryButton onClick={handleApply} disabled={applying} >
          {applying ? "Applying..." : "Apply Now"}
        </PrimaryButton>

      </AppCard>

    </div>
  );
}