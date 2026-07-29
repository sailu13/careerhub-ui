import { useEffect, useState } from "react";
import type { Job } from "../types/job";
import { getJobs } from "../services/jobService";

type Props = {
    search: string;
    location: string;
    employmentType: string;
};

export function useJobs({
    search,
    location,
    employmentType,
}: Props) {

    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadJobs();
    }, [search, location, employmentType]);

    async function loadJobs() {
        try {
            setLoading(true);

            const data = await getJobs();

            let filtered = [...data];

            if (search) {
                filtered = filtered.filter(job =>
                    job.title.toLowerCase().includes(search.toLowerCase())
                );
            }

            if (location !== "All") {
                filtered = filtered.filter(job =>
                    job.location === location
                );
            }

            if (employmentType !== "All") {
                filtered = filtered.filter(job =>
                    job.employmentType === employmentType
                );
            }

            setJobs(filtered);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return {
        jobs,
        loading,
        reload: loadJobs,
    };
}