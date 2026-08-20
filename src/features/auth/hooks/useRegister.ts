import { useState } from "react";
import type { RegisterRequest } from "../types/register";
import { registerUser } from "../services/authService";

export function useRegister() {
    const [loading, setLoading] = useState(false);

    async function register(data: RegisterRequest) {
        try {
            setLoading(true);
            const response = await registerUser(data);
            return {success: true, data: response.data.data};
        } catch (error: any) {
            return {success: false, message: error?.response?.data?.message ?? "Registration Failed"};
        } finally {
            setLoading(false);
        }
    }

    return {register, loading};
}