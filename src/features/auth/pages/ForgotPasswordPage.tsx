import { useAppTheme } from "@/shared/theme/theme";

export default function ForgotPasswordPage() {

  const t = useAppTheme();

  return (
    <div className={`flex min-h-screen items-center justify-center ${t.pageBackground}`}>

      <h1 className={`text-4xl font-bold ${t.heading}`}>
        Forgot Password
      </h1>

    </div>
  );
}