export const API = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
    ME: "/auth/me",
  },

  DASHBOARD: "/dashboard",

  JOBS: {
    CREATE: "/jobs",
    ALL: "/jobs",
    RECRUITER: "/jobs/recruiter",
    BY_ID: (id: number) => `/jobs/${id}`,
    SEARCH: "/jobs/search"
  },


  APPLICATIONS: {
    BASE: "/applications",
    APPLY: "/applications",
    MY: "/applications/my",
    BY_JOB: (jobId: number) => `/applications/job/${jobId}`,
    JOB: (jobId: number) => `/applications/job/${jobId}`,
    SHORTLIST: (jobId: number) => `/applications/job/${jobId}`,
    REJECT: (jobId: number) => `/applications/job/${jobId}`
  },

  RESUME: "/resume",

  PROFILE: {
    GET: "/profile",
    UPDATE: "/profile"
  },

  AI: "/ai",
};