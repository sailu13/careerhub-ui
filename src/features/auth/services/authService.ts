import http from "@/shared/services/http";
import type { LoginRequest } from "../types/auth";
import { API } from "@/api/endpoints";
import type { RegisterRequest } from "../types/register";

export async function login(data: LoginRequest) {
  return http.post(API.AUTH.LOGIN, data);
}

export function registerUser(data: RegisterRequest) {
  return http.post(API.AUTH.REGISTER, data);
}

export async function getCurrentUser() {
  return http.get(API.AUTH.ME);
}