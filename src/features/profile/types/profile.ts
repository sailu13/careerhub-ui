export interface ProfileResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export interface UpdateProfileRequest {
  firstName: string;
  lastName: string;
}