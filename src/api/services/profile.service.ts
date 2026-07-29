import http from "@/shared/services/http";
import { API } from "../endpoints";

export const getProfile = () => http.get(API.PROFILE);

export const updateProfile = (data: unknown) => http.put(API.PROFILE, data);