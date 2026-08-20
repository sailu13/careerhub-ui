import type { Applicant } from "../types/applicant"
import ApplicantCard from "./ApplicantCard";

type Props = {
    applicant: Applicant[];
    onShortList: (id: number) => void;
    onReject: (id: number) => void;
    onResume: (url: string) => void;
};

export default function Applicant({applicant, onShortList, onReject, onResume}: Props) {
    return (
        <div className="space-y-5">
            {applicant.map((applicant) =>(
                <ApplicantCard key={applicant.id} applicant={applicant} onShortList={onShortList} 
                  onReject={onReject} onResume={onResume} />
            ))}
        </div>
    )
}