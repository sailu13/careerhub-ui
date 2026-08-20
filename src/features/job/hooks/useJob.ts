import { useEffect, useState } from "react";
import type { Job } from "../types/job";
import { getJobById } from "@/api/services/job.service";

export function useJob(id: number) {
    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        loadJob();
    }, [id]);

    async function loadJob() {
        try {
            setLoading(true);
            const data = await getJobById(id);
            setJob(data);
        } catch (error) {
            console.error("Failed to load job", error);
        } finally {
            setLoading(false);
        }
    }

    return { job, loading, reload: loadJob, };
}