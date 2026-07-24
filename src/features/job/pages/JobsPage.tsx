import { useState } from "react";

import PageLayout from "@/shared/components/layout/PageLayout";

import SearchBar from "@/shared/components/common/SearchBar";
import FilterDropdown from "@/shared/components/common/FilterDropdown";

import JobList from "../components/JobList";

export default function JobsPage() {
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("ALL");

  return (
    <PageLayout
      title="Jobs"
      subtitle="Find your next opportunity"
    >
      {/* Search + Filter */}

      <div className="flex flex-col gap-4 md:flex-row">
        <SearchBar value={search} onChange={setSearch} placeholder="Search jobs..." />
        <FilterDropdown value={status} onChange={setStatus}
          options={[ { label: "All", value: "ALL", }, { label: "Full Time", value: "FULL_TIME", }, 
            { label: "Part Time", value: "PART_TIME", },{ label: "Contract", value: "CONTRACT"}, 
            { label: "Intern", value: "INTERN"}, { label: "Remote", value: "REMOTE"} ]} />
      </div>
      <JobList search={search} status={status} />
    </PageLayout>
  );
}