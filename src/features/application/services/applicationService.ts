import { API } from "@/api/endpoints";
import type { ApplicationResponse, ApplyJobRequest } from "../types/application";
import http from "@/shared/services/http";

export async function applyJob(request: ApplyJobRequest): Promise<ApplicationResponse> {
    const response = await http.post(API.APPLICATIONS.APPLY, request);
    return response.data.data;
}

export async function getMyApplication(): Promise<ApplicationResponse[]> {
    const response = await http.get(API.APPLICATIONS.MY);
    return response.data.data;
}