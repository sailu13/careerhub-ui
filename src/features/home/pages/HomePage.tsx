import { Navigate } from "react-router-dom";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import TrustedCompanies from "../components/TrustedCompanies";

export default function HomePage() {

  const token = localStorage.getItem("token");
  
  if(token){
    return <Navigate to="/dashboard" replace />
  }
  return (
    <>
      <HeroSection />
      <TrustedCompanies />
      <FeaturesSection />
    </>
  );
}