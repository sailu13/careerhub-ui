import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Search } from "lucide-react";
import { toast } from "sonner";

import BackButton from "@/shared/components/common/BackButton";
import PageHeader from "@/shared/components/common/PageHeader";
import LoadingSkeleton from "@/shared/components/common/LoadingSkeleton";
import AppCard from "@/shared/components/common/AppCard";

import RecruiterJobList from "../components/RecruiterJobList";
import { useRecruiterJobs } from "../hooks/useRecruiterJobs";

export default function MyJobsPage() {
    const navigate = useNavigate();
    const { jobs, loading } = useRecruiterJobs();
    const [search, setSearch] = useState("");

    function handleEdit(id: number) {
        navigate(`/post-job?id=${id}`);
    }

    function handleDelete(id: number) {
        toast.info(`Delete Job (${id}) - Backend integration coming soon`);
    }

    function handleApplicants(id: number) {
        navigate(`/applicants?jobId=${id}`);
    }

    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
        return (
            <div className="space-y-6 pt-4">
                <BackButton />

                <LoadingSkeleton className="h-12 w-64" />
                <LoadingSkeleton className="h-44 w-full" />
                <LoadingSkeleton className="h-44 w-full" />
            </div>
        );
    }

    return (
        <div className="space-y-8 pt-4">

            <BackButton />

            <PageHeader
                title="My Jobs"
                subtitle="Manage all your posted jobs"
            />

            {/* Search */}

            <AppCard>
                <div className="relative">

                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                        placeholder="Search jobs..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none focus:border-blue-500"
                    />

                </div>
            </AppCard>

            {filteredJobs.length === 0 ? (
                <AppCard className="py-20 text-center">

                    <h2 className="text-2xl font-bold">
                        No Jobs Found
                    </h2>

                    <p className="mt-3 text-slate-500">
                        Create your first job posting.
                    </p>

                </AppCard>
            ) : (
                <RecruiterJobList
                    jobs={filteredJobs}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onApplicants={handleApplicants}
                />
            )}
        </div>
    );
}