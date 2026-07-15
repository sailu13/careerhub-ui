import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboardService";
import type { DashboardResponse } from "../types/dashboard";

export default function DashboardPage() {

  const [dashboard, setDashboard] =
    useState<DashboardResponse | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadDashboard() {

      try {

        const response = await getDashboard();

        setDashboard(response.data.data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    }

    loadDashboard();

  }, []);

  if (loading) {
    return (
      <div className="p-10 text-2xl">
        Loading Dashboard...
      </div>
    );
  }

  return (

    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        Welcome {dashboard?.fullName} 👋
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="rounded-lg bg-slate-800 p-6">
          <h2 className="text-xl font-semibold">
            Applications
          </h2>

          <p className="text-4xl mt-4">
            {dashboard?.applications}
          </p>
        </div>

        <div className="rounded-lg bg-slate-800 p-6">
          <h2 className="text-xl font-semibold">
            Interviews
          </h2>

          <p className="text-4xl mt-4">
            {dashboard?.interviews}
          </p>
        </div>

        <div className="rounded-lg bg-slate-800 p-6">
          <h2 className="text-xl font-semibold">
            Resumes
          </h2>

          <p className="text-4xl mt-4">
            {dashboard?.resumes}
          </p>
        </div>

        <div className="rounded-lg bg-slate-800 p-6">
          <h2 className="text-xl font-semibold">
            Profile
          </h2>

          <p className="text-4xl mt-4">
            {dashboard?.profileCompletion}%
          </p>
        </div>

      </div>

    </div>
  );

}