import http from "@/shared/services/http";
import { API } from "../endpoints";

export const login = (data: unknown) =>
    http.post(API.AUTH.LOGIN, data);

export const register = (data: unknown) =>
    http.post(API.AUTH.REGISTER, data);

export const forgotPassword = (email: string) =>
    http.post(API.AUTH.FORGOT_PASSWORD, { email });

export const resetPassword = (token: string, password: string) =>
    http.post("/auth/reset-password", { token, password });