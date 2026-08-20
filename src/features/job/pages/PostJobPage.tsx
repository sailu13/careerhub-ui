import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PageHeader from "@/shared/components/common/PageHeader";
import AppCard from "@/shared/components/common/AppCard";
import JobForm from "../components/JobForm";
import { useCreateJob } from "../hooks/useCreateJob";
import BackButton from "@/shared/components/common/BackButton";
import type { JobRequest } from "../types/jobRequest";

export default function PostJobPage() {
    const navigate = useNavigate();
    const { createJob, loading} = useCreateJob();

    async function handleSubmit(job: JobRequest) {
        const response = await createJob(job);
        if(response.success){
            toast.success("Job posted successfully");
            navigate("/my-jobs", {state: {fromDashboard: true}});
        }else{
            toast.error(response.message);
        }
    }

    return (
        <div className="space-y-6">
            <div className="pt-4"><BackButton /></div>
            <PageHeader title="Post New Job" subtitle="Create a new opportunity for job seekers."/>
            <AppCard> <JobForm loading={loading} onSubmit={handleSubmit}/></AppCard>
        </div>
    );
}