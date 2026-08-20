export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "JOB_SEEKER" | "RECRUITER";
}

export interface LoginResponse {
  accessToken: string;
  tokentType: string;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}