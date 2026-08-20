import type { Job } from "@/features/job/types/job";
import type { JobRequest } from "@/features/job/types/jobRequest";

import { API } from "../endpoints";
import http from "@/shared/services/http";
import type { PageResponse } from "@/shared/types/PageResponse";

// ===============================
// Get All Jobs
// ===============================
export async function getJobs(page: number = 0, size: number = 10, search?: string, location?: string,
  employmentType?: string, salaryMin?: number, salaryMax?: number, experience?: string): Promise<PageResponse<Job>> {
    const response = await http.get(API.JOBS.SEARCH, { params: { page, size, search, 
      location: location!== "All" ? location:undefined, employmentType: employmentType!=="All" ? employmentType : undefined,
      salaryMin, salaryMax, experience }
    });
  return response.data.data;
}

// ===============================
// Get Job By Id
// ===============================
export async function getJobById(id: number): Promise<Job> {
  const response = await http.get(`${API.JOBS}/${id}`);
  return response.data.data;
}

// ===============================
// Create Job
// ===============================
export function createJob(data: JobRequest) {
  return http.post(API.JOBS.CREATE, data);
}

// ===============================
// Update Job
// ===============================
export async function updateJob(id: number, data: JobRequest) {
  return await http.put(`${API.JOBS}/${id}`, data);
}

// ===============================
// Delete Job
// ===============================
export async function deleteJob(id: number) {
  return await http.delete(`${API.JOBS}/${id}`);
}

// ===============================
// Recruiter Jobs
// ===============================
export async function getMyJobs() {
  const response = await http.get(`${API.JOBS}/my`);
  return response.data.data;
}

export async function getRecruiterJobs() {
  return http.get(API.JOBS.RECRUITER);
}