export interface DashboardResponse {
  // Job Seeker
  resumes: boolean;
  profileCompletion: number;
  applications: number;

  // Recruiter
  jobsPosted?: number;
  activeJobs?: number;
  applicants?: number;

  // Admin
  users?: number;
  recruiters?: number;
  jobs?: number;
}