
export interface Job {
  id: number;
  title: string;
  company: string;
  experience: string;
  location: string;
  salary: string;
  description: string;
  skills: string;
  employmentType: | "FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERN" | "REMOTE";
  postedAt: string;
}