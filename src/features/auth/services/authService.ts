import http from "@/shared/services/http";
import type { LoginRequest } from "../types/auth";
import { API_ENDPOINTS } from "@/shared/constants/api";


export async function login(data: LoginRequest) {
  return http.post(API_ENDPOINTS.AUTH.LOGIN, data);
}