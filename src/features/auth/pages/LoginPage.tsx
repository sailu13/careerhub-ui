import LoginForm from "../components/LoginForm";
import { useAppTheme } from "@/shared/theme/theme";

export default function LoginPage() {
  const t = useAppTheme();

  return (
    <div
      className={`flex min-h-screen items-center justify-center px-4 transition-all duration-300 ${t.pageBackground}`}
    >
      <div className="w-full max-w-lg">
        <LoginForm />
      </div>
    </div>
  );
}