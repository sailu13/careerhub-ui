import { useState } from "react";
import { applyForJob } from "@/api/services/application.service";

export function useApplyJob() {
    const [loading, setLoading] = useState(false);

    async function apply(jobId: number) {
      setLoading(true);
      try {
        const data = await applyForJob({jobId});
        return {
          success: true,
          message: "Application submitted Successfully",
          data
        };
      } catch (error: any) {
        return {
          success: true,
          message: error?.response?.data?.message || "Failed to submit application"
        };
      } finally {
        setLoading(false);
      }
    }
    
    return {
        apply,
        loading,
    };
}