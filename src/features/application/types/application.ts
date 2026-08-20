export type ApplicationStatus = | "APPLIED" | "UNDER_REVIEW" | "SHORTLISTED" | "INTERVIEW_SCHEDULED" | "OFFERED" | "REJECTED"
| "WITHDRAW";

export interface ApplyJobRequest {
    jobId?: number;
    resumeURL?: string;
    coverLetter?: string;
}

export interface Application {
    id: number;
    jobId: number;
    jobTitle: string;
    company: string;
    applicationId: number;
    applicationName: string;
    applicationLastName: string;
    applicationEmail: string;
    applicationCountryCode: string | null;
    applicationMobileNumber: string | null;
    resumeURL?: string;
    coverLetter?: string;
    status: ApplicationStatus;
    appliedAt: string;
}