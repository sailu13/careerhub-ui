import type { Application, ApplyJobRequest } from "@/features/application/types/application";
import http from "@/shared/services/http";
import { API } from "../endpoints";

export async function applyForJob(data: ApplyJobRequest): Promise<Application> {
    const response = await http.post(API.APPLICATIONS.APPLY, data);
    return response.data.data;
}

export async function getApplicantsForJob(jobId: number): Promise<Application[]> {
    const response = await http.get(API.APPLICATIONS.BY_JOB(jobId));
    return response.data.data;
}

export async function getMyApplications(): Promise<Application[]> {
    const response = await http.get(API.APPLICATIONS.MY);
    return response.data.data;
}