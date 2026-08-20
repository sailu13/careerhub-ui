import { useEffect, useState } from "react";

import { getMyApplications } from "@/api/services/application.service";
import type { Application } from "../types/application";

export function useMyApplications() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadApplications();
  }, []);

  async function loadApplications() {
    try {
      setLoading(true);

      const data: Application[] = await getMyApplications();

      // Store complete applications
      setApplications(data);

      // Store only job IDs for "Already Applied" check
      setAppliedJobs(
        data.map((application: Application) => application.jobId)
      );

    } catch (error) {
      console.error("Failed to load applications", error);
    } finally {
      setLoading(false);
    }
  }

  return {
    applications,
    appliedJobs,
    loading,
    reload: loadApplications,
  };
}