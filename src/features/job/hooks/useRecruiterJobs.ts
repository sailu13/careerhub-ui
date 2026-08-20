import { useEffect, useState } from "react";

import { getRecruiterJobs } from "@/api/services/job.service";

import type { Job } from "../types/job";

export function useRecruiterJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadJobs();
  }, []);

  async function loadJobs() {
    try {
      setLoading(true);
      const response = await getRecruiterJobs();
      console.log("Recruiter Jobs Response:", response);
      setJobs(response.data.data);
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