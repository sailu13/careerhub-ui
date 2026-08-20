import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 font-medium 
            text-blue-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:bg-blue-50
            hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-blue-400 dark:hover:bg-slate-800">
            <ArrowLeft size={18} />
            Back
        </button>
    );
}