import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
    title: string;
    subtitle?: string;
    showBack?: boolean;
};

export default function PageHeader({ title, subtitle, showBack = false }: Props) {
    const navigate = useNavigate();
    
    return (
        <div className="mb-8">
            {showBack && (
                <button
                    onClick={() => navigate(-1)}
                    className="mb-4 flex items-center gap-2 text-blue-500 transition hover:text-blue-700"
                >
                    <ArrowLeft size={20} />
                    Back
                </button>
            )}
            <h1 className="text-4xl font-bold">
                {title}
            </h1>
            {subtitle && (
                <p className="mt-2 text-slate-400">
                    {subtitle}
                </p>
            )}
        </div>
    );
}