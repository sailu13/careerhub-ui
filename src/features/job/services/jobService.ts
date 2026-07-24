import api from "@/api/client";

export async function getJobs() {
    return api.get("/jobs");
}