import type { Job } from "../types/job";

import JobCard from "./JobCard";

import LoadingSkeleton from "@/shared/components/common/LoadingSkeleton";
import EmptyState from "@/shared/components/common/EmptyState";

type Props = {
  jobs: Job[];
  loading: boolean;
};

export default function JobList({ jobs, loading,}: Props) {

  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((item) => (
          <LoadingSkeleton key={item} className="h-64 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  if (!loading && jobs.length === 0) {
    return (
      <EmptyState title="No Jobs Found" description="Try changing your search or filters." />
    );
  }

  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}