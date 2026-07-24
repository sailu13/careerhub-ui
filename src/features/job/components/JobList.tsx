import LoadingSkeleton from "@/shared/components/common/LoadingSkeleton";
import NoData from "@/shared/components/common/NoData";
import JobCard from "./JobCard";
import { useJobs } from "../hooks/useJobs";

type Props = { search: string; status: string };

export default function JobList({ search, status }: Props) {
    const { jobs, loading } = useJobs();

    if (loading) {
        return (
            <div className="space-y-6">
                <LoadingSkeleton className="h-56 w-full" />
                <LoadingSkeleton className="h-56 w-full" />
                <LoadingSkeleton className="h-56 w-full" />
            </div>
        );
    }

    const filteredJobs = jobs.filter((job) => {
        const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
            job.company.toLowerCase().includes(search.toLowerCase()) ||
            job.location.toLowerCase().includes(search.toLowerCase());
        const matchesEmployementType = status === "ALL" || job.employmentType === status;

        return matchesSearch && matchesEmployementType;
    });

    if (filteredJobs.length === 0) {
        return (
            <NoData title="No Jobs Found" description="Try changing your search or filter." />
        );
    }

    return (
        <div className="space-y-6">
            {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
}