import type { LoginRequest } from "../types/auth";

export async function login(data: LoginRequest) {
  console.log("Login Request", data);

  return Promise.resolve({
    success: true,
    token: "dummy-token",
  });
}