export interface ProfileResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  countryCode: string | null;
  mobileNumber: string | null;
  profileComplete: boolean;
}

export interface UpdateProfileRequest {
  firstName: string;
  lastName: string;
  countryCode: string;
  mobileNumber: string;
}