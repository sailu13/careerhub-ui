import { useAppTheme } from "@/shared/theme/theme";
import type { Job } from "../types/job";
import AppCard from "@/shared/components/common/AppCard";
import StatusBadge from "@/shared/components/common/StatusBadge";
import InfoItem from "@/shared/components/common/InfoItem";
import { Briefcase, Building2, Clock, IndianRupee, MapPin } from "lucide-react";
import { formatPostedDate } from "../utils/jobUtils";
import PrimaryButton from "@/shared/components/buttons/PrimaryButton";
import SkillBadge from "@/shared/components/common/SkillBadge";

type Props = { job: Job; };

export default function JobCard({ job }: Props) {
    const t = useAppTheme();

    return (
        <AppCard whileHover={{ y: -5, scale: 1.01 }} className="space-y-5">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <h2 className={`text-xl font-bold ${t.heading}`}> {job.title}</h2>
                    <p className={`mt-1 ${t.subText}`}>{job.company}</p>
                </div>
                <StatusBadge>{job.employmentType.replace("_", " ")}</StatusBadge>
            </div>

            {/*Job Information */}
            <div className="grid gap-3 md:grid-cols-2">
                <InfoItem icon={<Building2 size={18} />} label="Company" value={job.company} />
                <InfoItem icon={<MapPin size={18} />} label="Location" value={job.location} />
                <InfoItem icon={<Briefcase size={18} />} label="Experience" value={job.experience} />
                <InfoItem icon={<IndianRupee size={18} />} label="Salary" value={job.salary} />
            </div>

            {/* Description */}
            <div>
                <h3 className={`font-semibold ${t.heading}`}>Description</h3>
                <p className={`mt-2 text-sm ${t.text}`}>{job.description}</p>
            </div>

            {/* Skills */}
            <div>
                <h3 className={`mb-3 font-semibold ${t.heading}`}>Skills</h3>
                <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                        <SkillBadge key={skill} skill={skill} />
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className={`flex items-center justify-between border-t pt-5 ${t.border}`}>
                <div className={`flex items-center gap-2 ${t.subText}`}>
                    <Clock size={16} />
                    Posted {formatPostedDate(job.postedAt)}
                </div>
                <PrimaryButton>Apply Now</PrimaryButton>
            </div>
        </AppCard>
    );
}