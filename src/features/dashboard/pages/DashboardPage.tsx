import AdminDashboard from "../components/AdminDashboard";
import JobSeekerDashboard from "../components/JobSeekerDashboard";
import RecruiterDashboard from "../components/RecruiterDashboard";

export default function DashboardPage() {
  console.log("DashboardPage rendered");
  const role = localStorage.getItem("role");

  switch (role) {

    case "JOB_SEEKER":
      return <JobSeekerDashboard />;

    case "RECRUITER":
      return <RecruiterDashboard />;

    case "ADMIN":
      return <AdminDashboard />;

    default:
      return <JobSeekerDashboard />;
  }
}