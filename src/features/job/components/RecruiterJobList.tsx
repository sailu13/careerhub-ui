import RecruiterJobCard from "./RecruiterJobCard";
import type { Job } from "../types/job";

type Props = {
  jobs: Job[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onApplicants: (id: number) => void;
};

export default function RecruiterJobList({
  jobs,
  onEdit,
  onDelete,
  onApplicants,
}: Props) {
  return (
    <div className="space-y-5">
      {jobs.map((job) => (
        <RecruiterJobCard
          key={job.id}
          job={job}
          onEdit={onEdit}
          onDelete={onDelete}
          onApplicants={onApplicants}
        />
      ))}
    </div>
  );
}