export type RegisterRequest = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: "JOB_SEEKER" | "RECRUITER" | "ADMIN";
};