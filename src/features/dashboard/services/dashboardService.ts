import { API } from "@/api/endpoints";
import http from "@/shared/services/http";

export async function getDashboard() {
  return http.get(API.DASHBOARD);
}