import { useEffect, useState } from "react";
import type { Job } from "../types/job";
import { getJobs } from "@/api/services/job.service";

export function useJobs() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {loadJobs();}, []);

    async function loadJobs() {
        try {
            const response = await getJobs();
            setJobs(response.data.data);
        } finally {
            setLoading(false);
        }
    } 

    return {jobs, loading};
}