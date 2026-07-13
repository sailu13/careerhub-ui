import { BriefcaseBusiness } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <BriefcaseBusiness className="h-8 w-8 text-blue-500" />
      <span className="text-2xl font-bold text-blue-500">
        CareerHub
      </span>
    </div>
  );
}