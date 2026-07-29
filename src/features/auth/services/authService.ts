import http from "@/shared/services/http";
import type { LoginRequest } from "../types/auth";
import { API } from "@/api/endpoints";

export async function login(data: LoginRequest) {
  return http.post(API.AUTH.LOGIN, data);
}