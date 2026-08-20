import { useEffect, useState } from "react";

import type { Applicant } from "../types/applicant";
import { getApplicants, shortlistApplicant, rejectApplicant } from "@/api/services/applicant.service";

export function useApplicants(jobId?: number) {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadApplicants();
  }, [jobId]);

  async function loadApplicants() {
    if(!jobId) {
        setApplicants([]);
        return;
    }
    try {
      setLoading(true);
      const data = await getApplicants(jobId);
      setApplicants(data);
    } finally {
      setLoading(false);
    }
  }

  async function shortlist(id: number) {
    await shortlistApplicant(id);
    await loadApplicants();
  }

  async function reject(id: number) {
    await rejectApplicant(id);
    await loadApplicants();
  }

  return {
    applicants,
    loading,
    shortlist,
    reject,
    reload: loadApplicants,
  };
}