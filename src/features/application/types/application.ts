export interface ApplicationResponse {
    id: number;
    jobId: number;
    jobTitle: string;
    company: string;
    status: string;
    appliedAt: string;
}

export interface ApplyJobRequest {
    jobId: number;
}