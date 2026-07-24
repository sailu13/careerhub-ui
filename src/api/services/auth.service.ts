import api from "../client";
import { API } from "../endpoints";

export const login = (data: unknown)=> api.post(`${API.AUTH}/login`, data);

export const register = (data: unknown)=> api.post(`${API.AUTH}/register`, data);

export const forgotPassword = (email: string)=> api.post(`${API.AUTH}/forgot-password`, {email});

export const resetPassword = (token: string, password: string) =>
    api.post(`${API.AUTH}/reset-password`, {token, password});
