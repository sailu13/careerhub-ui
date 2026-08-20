import { z } from "zod";

export const registerSchema = z.object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "password should contain at least 6 characters"),
    confirmPassword: z.string(),
    role: z.enum(["JOB_SEEKER","RECRUITER","ADMIN"])
}).refine((data)=> data.password === data.confirmPassword, {
    message: "Password don't match", path: ["confirmPassword"]
});

export type RegisterFormData = z.infer<typeof registerSchema>;