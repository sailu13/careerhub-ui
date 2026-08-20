import { jwtDecode } from "jwt-decode";

const TOKEN_KEY = "token";

interface JwtPayload {
  exp: number;
}

export function saveToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function clearAuth() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("userId");
  localStorage.removeItem("firstName");
  localStorage.removeItem("lastName");
  localStorage.removeItem("email");
}

export function logout(message?: string) {
  clearAuth();
  if (message) {
    sessionStorage.setItem("logoutMessage", message);
  }
  window.location.replace("/");
}

export function isTokenExpired() {
  const token = getToken();

  if (!token) return true;

  try {
    const decoded = jwtDecode<JwtPayload>(token);

    console.log("Decoded JWT:", decoded);

    if (!decoded.exp) {
      console.log("No exp found");
      return true;
    }

    const expiry = decoded.exp * 1000;
    const now = Date.now();

    console.log("Expiry Timestamp:", expiry);
    console.log("Current Timestamp:", now);

    console.log("Expiry Date:", new Date(expiry));
    console.log("Current Date:", new Date(now));

    const expired = expiry <= now;

    console.log("Expired?", expired);

    return expired;
  } catch (error) {
    console.error("JWT decode error:", error);
    return true;
  }
}