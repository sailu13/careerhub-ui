import { z } from "zod";

export const jobSchema = z.object({
    title: z.string().min(3, "Job title is required"),
    company: z.string().min(2, "Company is required"),
    location: z.string().min(2, "Location is required"),
    employmentType: z.string().min(1, "Employment type is required"),
    experience: z.string().min(1, "Experience is required"),
    salaryMin: z.coerce.number().min(1, "Minimun salary is required"),
    salaryMax: z.coerce.number().min(1, "Maximun salary is required"),
    description: z.coerce.string().min(30, "Description is required"),
    skills: z.array(z.string()).min(1, "Skills is required")
});
export type JobFormData = z.infer<typeof jobSchema>;