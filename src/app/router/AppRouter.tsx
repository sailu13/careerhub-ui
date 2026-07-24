import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "@/layouts/PublicLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

import HomePage from "@/features/home/pages/HomePage";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage";

import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import ProfilePage from "@/features/profile/pages/ProfilePage";
import ResumePage from "@/features/resume/pages/ResumePage";
import ProtectedRoute from "@/shared/components/auth/ProtectedRoute";
import PublicRoute from "@/shared/components/auth/PublicRoute";
import SettingsPage from "@/features/settings/pages/SettingsPage";
import JobsPage from "@/features/job/pages/JobsPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
          <Route
            path="/forgot-password"
            element={<ForgotPasswordPage />}
          />
        </Route>

        {/* Dashboard */}
        <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}