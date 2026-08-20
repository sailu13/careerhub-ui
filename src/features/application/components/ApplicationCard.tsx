import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  Building,
  CalendarDays,
} from "lucide-react";

import AppCard from "@/shared/components/common/AppCard";
import PrimaryButton from "@/shared/components/buttons/PrimaryButton";
import { useAppTheme } from "@/shared/theme/theme";

import type { Application } from "../types/application";
import ApplicationStatusBadge from "./ApplicationStatusBadge";

interface Props {
  application: Application;
}

export default function ApplicationCard({
  application,
}: Props) {
  const navigate = useNavigate();
  const t = useAppTheme();

  return (
    <AppCard className="space-y-5">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">

        <div>
          <h2 className={`text-xl font-bold ${t.text}`}>
            {application.jobTitle}
          </h2>

          <p className={`mt-1 ${t.subText}`}>
            {application.company}
          </p>
        </div>

        <ApplicationStatusBadge
          status={application.status}
        />
      </div>

      {/* Application Information */}
      <div className="grid gap-4 md:grid-cols-2">

        {/* Company */}
        <div className={`flex items-center gap-3 ${t.text}`}>
          <Building size={18} />
          <span>{application.company}</span>
        </div>

        {/* Job */}
        <div className={`flex items-center gap-3 ${t.text}`}>
          <Briefcase size={18} />
          <span>{application.jobTitle}</span>
        </div>

        {/* Applied Date */}
        <div className={`flex items-center gap-3 ${t.text}`}>
          <CalendarDays size={18} />
          <span>
            {new Date(
              application.appliedAt
            ).toLocaleDateString()}
          </span>
        </div>

      </div>

      {/* Action */}
      <div className="flex justify-end pt-2">

        <PrimaryButton
          onClick={() =>
            navigate(`/jobs/${application.jobId}`)
          }
        >
          View Job
        </PrimaryButton>

      </div>

    </AppCard>
  );
}