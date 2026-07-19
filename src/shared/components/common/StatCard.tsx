import type { ReactNode } from "react";

type Props = {
    title: string;
    value: string;
    icon: ReactNode;
    color?: string; 
};

export default function StatCard({title, value, icon, color = 'bg-blue-500'}: Props) {
    return (
        <div className="rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-slate-400">
                        {title}
                    </p>
                    <p className="mt-2 text-2xl font-bold">
                        {value}
                    </p>
                </div>
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl text-white ${color}`}>
                    {icon}
                </div>
            </div>
        </div>
    );
}