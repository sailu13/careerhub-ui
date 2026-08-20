import { API } from "@/api/endpoints";
import http from "@/shared/services/http";
import type { UpdateProfileRequest } from "../types/profile";

export async function getProfile() {
    return http.get(API.PROFILE.GET);    
}

export async function updateProfile(data: UpdateProfileRequest) {
    return http.put(API.PROFILE.UPDATE, data);
}