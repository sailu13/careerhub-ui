import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import { getToken, logout } from "@/shared/utils/authUtils";

interface JwtPayload {
    exp: number;
}

export default function useAutoLogout() {
    useEffect(() => {
        const token = getToken();

        if (!token) return;

        try {
            const decoded = jwtDecode<JwtPayload>(token);

            const expiresIn = decoded.exp * 1000 - Date.now();

            if (expiresIn <= 0) {
                logout("Your session has expired. Please login again.");
                return;
            }

            const timer = setTimeout(() => {
                logout("Your session has expired. Please login again.");
            }, expiresIn);

            return () => clearTimeout(timer);
        } catch {
            logout("Your session has expired. Please login again.");
        }
    }, []);
}