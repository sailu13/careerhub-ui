import {
  Briefcase,
  MapPin,
  Clock3,
  Pencil,
  Trash2,
  Users,
} from "lucide-react";

import AppCard from "@/shared/components/common/AppCard";
import { useAppTheme } from "@/shared/theme/theme";

import type { Job } from "../types/job";

type Props = {
  job: Job;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onApplicants: (id: number) => void;
};

export default function RecruiterJobCard({
  job,
  onEdit,
  onDelete,
  onApplicants,
}: Props) {
  const t = useAppTheme();

  return (
    <AppCard className="space-y-5">

      <div className="flex items-start justify-between">

        <div>

          <h2 className={`text-xl font-bold ${t.heading}`}>
            {job.title}
          </h2>

          <p className={t.subText}>
            {job.company}
          </p>

        </div>

      </div>

      <div className={`flex flex-wrap gap-5 text-sm ${t.subText}`}>

        <div className="flex items-center gap-2">
          <MapPin size={16} />
          {job.location}
        </div>

        <div className="flex items-center gap-2">
          <Briefcase size={16} />
          {job.employmentType}
        </div>

        <div className="flex items-center gap-2">
          <Clock3 size={16} />
          {job.postedAt}
        </div>

      </div>

      <div className="flex gap-3 pt-3">

        <button
          onClick={() => onEdit(job.id)}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
        >
          <Pencil size={16} />
          Edit
        </button>

        <button
          onClick={() => onDelete(job.id)}
          className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
        >
          <Trash2 size={16} />
          Delete
        </button>

        <button
          onClick={() => onApplicants(job.id)}
          className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-700"
        >
          <Users size={16} />
          Applicants
        </button>

      </div>

    </AppCard>
  );
}