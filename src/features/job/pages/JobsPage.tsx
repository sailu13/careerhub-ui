import { useState } from "react";

import PageHeader from "@/shared/components/common/PageHeader";
import SectionTitle from "@/shared/components/common/SectionTitle";

import JobFilters from "../components/JobFilters";
import JobList from "../components/JobList";
import { useJobs } from "../hooks/useJobs";
import { useLocation } from "react-router-dom";

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [employmentType, setEmploymentType] = useState("All");
  const { jobs, loading } = useJobs({search, location, employmentType });
  const routerLocation = useLocation();
  const showBack = routerLocation.state?.fromDashboard ?? false;

  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader title="Browse Jobs" subtitle="Discover your next career opportunity" showBack={showBack} />

      {/* Search & Filters */}
      <JobFilters search={search} onSearchChange={setSearch} location={location}
        onLocationChange={setLocation} employmentType={employmentType} onEmploymentTypeChange={setEmploymentType} />

      {/* Section Title */}
      <SectionTitle title="Available Jobs" subtitle={`${jobs.length} Jobs Found`} />

      {/* Job List */}
      <JobList jobs={jobs} loading={loading} />
    </div>
  );
}