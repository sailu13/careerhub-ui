import { API } from "../endpoints";
import http from "@/shared/services/http";

export async function getApplicants(jobId?: number) {
  const response = await http.get(`${API.APPLICATIONS}/job/${jobId}`);
  return response.data.data;
}

export async function shortlistApplicant(id: number) {
    return http.put(API.APPLICATIONS.SHORTLIST(id));
}

export async function rejectApplicant(id: number) {
    return http.put(API.APPLICATIONS.REJECT(id));
}