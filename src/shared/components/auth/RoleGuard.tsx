import type { ReactNode } from "react"
import { Navigate } from "react-router-dom";

type Props = {
    children: ReactNode;
    roles: string[];
};

export default function RoleGuard({children, roles}: Props) {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if(!token) {
        return <Navigate to="/login" replace />;
    }
    if(!role || !roles.includes(role)){
        return <Navigate to="/dashboard" replace />;
    }
    return <>{children}</>;
}