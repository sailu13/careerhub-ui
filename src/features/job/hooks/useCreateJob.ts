import { useState } from "react";
import type { JobRequest } from "../types/jobRequest";
import { createJob } from "@/api/services/job.service";

export function useCreateJob() {
  const [loading, setLoading] = useState(false);

  async function submitJob(data: JobRequest) {
    try {
      setLoading(true);

      const response = await createJob(data);

      return {
        success: true,
        data: response.data.data,
      };
    } catch (error: any) {
      return {
        success: false,
        message:
          error?.response?.data?.message ?? "Unable to create job",
      };
    } finally {
      setLoading(false);
    }
  }

  return {
    createJob: submitJob,
    loading,
  };
}