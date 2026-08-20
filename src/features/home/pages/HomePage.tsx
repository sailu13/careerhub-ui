import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";

import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import TrustedCompanies from "../components/TrustedCompanies";

export default function HomePage() {

  const token = localStorage.getItem("token");
  console.log("HomePage token:", token);

  useEffect(() => {
    const message = sessionStorage.getItem("logoutMessage");

    if (message) {
      toast.info(message);
      sessionStorage.removeItem("logoutMessage");
    }
  }, []);

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <>
      <HeroSection />
      <TrustedCompanies />
      <FeaturesSection />
    </>
  );
}