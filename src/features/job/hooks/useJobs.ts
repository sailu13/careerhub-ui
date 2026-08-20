import { getJobs } from "@/api/services/job.service";
import { useEffect, useState } from "react";
import type { Job } from "@/features/job/types/job";

type Props = {
  search: string;
  location: string;
  employmentType: string;
};

export function useJobs({search, location, employmentType,}: Props) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {loadJobs();}, [page, search, location, employmentType]);

  async function loadJobs() {
    try {
      setLoading(true);
      const data = await getJobs(page, 10, search, location, employmentType);
      setJobs(data.content);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return { jobs, loading, reload: loadJobs, page, setPage, totalPages };
}