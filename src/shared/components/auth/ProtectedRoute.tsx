import { getToken, isTokenExpired, logout } from "@/shared/utils/authUtils";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const token = getToken();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (isTokenExpired()) {
    logout();
    return null;
  }

  return <>{children}</>;
}