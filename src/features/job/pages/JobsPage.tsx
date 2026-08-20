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
  const { jobs, loading, page, setPage, totalPages } = useJobs({search, location, employmentType });
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
      <SectionTitle title="Available Jobs" subtitle={`${jobs.length} Jobs on this page`} />

      {/* Job List */}
      <JobList jobs={jobs} loading={loading} />

      <div className="flex items-center justify-center pt-6">
        <button onClick={()=> setPage(page-1)} disabled={page===0} className="rounded-lg border px-4 py-2 disabled:opacity-50">
          Previous
        </button>
        <span className="text-sm font-medium px-6">  Page {page + 1} of {totalPages}  </span>
        <button onClick={()=> setPage(page+1)} disabled={page+1 >= totalPages} 
          className="rounded-lg border px-4 py-2 disabled:opacity-50">
            Next
        </button>
      </div>
    </div>
  );
}