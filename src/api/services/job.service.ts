import type { Job } from "@/features/job/types/job";
import { API } from "../endpoints";
import http from "@/shared/services/http";

export async function getJobs(): Promise<Job[]> {
    const response = await http.get(API.JOBS);
    return response.data.data;
}

export async function getJobById(id: number): Promise<Job> {
    const response = await http.get(`${API.JOBS}/${id}`);
    return response.data.data;
}