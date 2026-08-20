import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { saveToken } from "@/shared/utils/authUtils";
import { getCurrentUser } from "../services/authService";

export default function OAuth2SuccessPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function handleOAuthLogin() {
      const token = searchParams.get("token");

      if (!token) {
        console.error("OAuth token not found");
        navigate("/login", { replace: true });
        return;
      }

      try {
        // 1. Save JWT
        saveToken(token);
        console.log("OAuth token saved");

        // 2. Fetch logged-in user
        const response = await getCurrentUser();
        console.log("Current OAuth user:", response.data);
        const user = response.data.data;

        // 3. Store user information
        localStorage.setItem("email", user.email);
        localStorage.setItem("firstName", user.firstName);
        localStorage.setItem("lastName", user.lastName);
        localStorage.setItem("userId", user.id.toString());
        localStorage.setItem("role", user.role);

        // 4. Go to dashboard
        navigate("/dashboard", {replace: true,});
      } catch (error) {
        console.error("OAuth login failed:", error);
        localStorage.removeItem("token");
        navigate("/login", {replace: true,});
      }
    }

    handleOAuthLogin();
  }, [searchParams, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Signing you in...</h2>

        <p className="mt-2 text-slate-500">Loading your CareerHub account...</p>
      </div>
    </div>
  );
}
