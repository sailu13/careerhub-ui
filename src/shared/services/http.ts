import axios from "axios";
import { logout } from "@/shared/utils/authUtils";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT automatically to every request
http.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  const isAuthRequest =
    config.url?.includes("/api/auth/login") ||
    config.url?.includes("/api/auth/register");
  if (token && !isAuthRequest) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle expired session automatically
http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      logout("Your session has expired. Please login again.");
    }
    return Promise.reject(error);
  }
);

export default http;