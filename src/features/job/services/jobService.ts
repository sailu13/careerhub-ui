import { API } from "@/api/endpoints";
import http from "@/shared/services/http";

// type ApiResponse<T> = {
//   success: boolean;
//   message: string;
//   data: T;
// };

export async function getJobs() {
  const response = await http.get(API.JOBS);
  return response.data.data;
}

export async function getJobById(id: number) {
  const response = await http.get(`${API.JOBS}/${id}`);
  return response.data.data;
}