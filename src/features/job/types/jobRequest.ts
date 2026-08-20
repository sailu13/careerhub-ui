export interface JobRequest {
  title: string;
  company: string;
  location: string;
  experience: string;
  salaryMin: number;
  salaryMax: number;
  description: string;
  skills: string[];
  employmentType: string;
}