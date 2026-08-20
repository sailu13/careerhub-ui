export interface Applicant {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    resumeUrl: string;
    appliedDate: string;
    status: "PENDING" | "SHORTLISTED" | "REJECTED";
}