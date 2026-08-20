export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  experience: string;
  salaryMin: number;
  salaryMax: number;
  employmentType: string;
  description: string;
  skills: string[];
  postedAt: string;
}

export interface CreateJobRequest {
  title: string;
  company: string;
  location: string;
  employmentType: string;
  experience: string;
  salaryMin: number;
  salaryMax: number;
  description: string;
  skills: string[];
}

export interface JobResponse {
  id: number;
  title: string;
  company: string;
  location: string;
  employmentType: string;
  experience: string;
  salaryMin: number;
  salaryMax: number;
  description: string;
  skills: string[];
  postedAt: string;
}