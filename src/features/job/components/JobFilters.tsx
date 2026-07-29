import SearchBar from "@/shared/components/common/SearchBar";
import FilterDropdown from "@/shared/components/common/FilterDropdown";

type Props = {
    search: string; onSearchChange: (value: string) => void;
    location: string; onLocationChange: (value: string) => void;
    employmentType: string; onEmploymentTypeChange: (value: string) => void;
};

export default function JobFilters({ search, onSearchChange, location, onLocationChange,
    employmentType, onEmploymentTypeChange, }: Props) {
    return (
        <div className="mb-8 grid gap-4 md:grid-cols-3">
            <SearchBar value={search} onChange={onSearchChange} placeholder="THIS IS MY JOB FILTER" />
            <FilterDropdown value={location} onChange={onLocationChange}
                options={["All", "Hyderabad", "Bangalore", "Chennai", "Pune",]} />
            <FilterDropdown value={employmentType} onChange={onEmploymentTypeChange}
                options={["All", "FULL_TIME", "PART_TIME", "REMOTE", "CONTRACT", "INTERN",]} />
        </div>
    );
}