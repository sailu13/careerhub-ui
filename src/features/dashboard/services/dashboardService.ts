import http from "@/shared/services/http";
import { API_ENDPOINTS } from "@/shared/constants/api";

export async function getDashboard() {
  return http.get(API_ENDPOINTS.DASHBOARD);
}