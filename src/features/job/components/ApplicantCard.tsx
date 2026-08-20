import type { Applicant } from "../types/applicant";
import AppCard from "@/shared/components/common/AppCard";
import { useAppTheme } from "@/shared/theme/theme";
import { CheckCircle, FileText, Mail, Phone, XCircle } from "lucide-react";

type Props = {
    applicant: Applicant;
    onShortList: (id: number) => void;
    onReject: (id: number) => void;
    onResume: (url: string) => void;
};

export default function ApplicantCard({ applicant, onShortList, onReject, onResume }: Props) {
    const t = useAppTheme();

    return (
        <AppCard className="space-y-5">
            <div>
                <h2 className={`text-xl font-bold ${t.heading}`}>{applicant.firstName} {applicant.lastName}</h2>
                <p className={t.subText}>Applied on {applicant.appliedDate}</p>
            </div>
            <div className={`space-y-2 ${t.subText}`}>
                <div className="flex items-center gap-2"><Mail size={16} /> {applicant.email}</div>
                <div className="flex items-center gap-2"><Phone size={16} /> {applicant.phone}</div>
            </div>
            <div className="flex flex-wrap gap-3 pt-3">
                <button onClick={() => onResume(applicant.resumeUrl)} className="flex item-center gap-2 rounded-lg 
                bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"><FileText size={16} />Resume</button>
                <button  onClick={() => onShortList(applicant.id)} className="flex items-center gap-2 rounded-lg
                 bg-green-600 px-4 py-2 text-white hover:bg-green-700"><CheckCircle size={16} />Shortlist</button>
                <button onClick={() => onReject(applicant.id)} className="flex items-center gap-2 rounded-lg 
                bg-red-600 px-4 py-2 text-white hover:bg-red-700"><XCircle size={16} />Reject</button>
            </div>
        </AppCard>
    );
}