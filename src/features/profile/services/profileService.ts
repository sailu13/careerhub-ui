import { API } from "@/api/endpoints";
import http from "@/shared/services/http";

export async function getProfile() {
    return http.get(API.PROFILE);    
}

export async function updateProfile(data: {firstName: string, lastName: string}) {
    return http.put(API.PROFILE, data);
}