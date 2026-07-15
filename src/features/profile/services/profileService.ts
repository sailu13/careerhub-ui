import http from "@/shared/services/http";

export async function getProfile() {
    return http.get("/api/profile");    
}

export async function updateProfile(data: {firstName: string, lastName: string}) {
    return http.put("/api/profile", data);
}