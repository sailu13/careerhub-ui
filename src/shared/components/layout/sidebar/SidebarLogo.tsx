import { useAppTheme } from "@/shared/theme/theme";

export default function SidebarLogo(){
    const t = useAppTheme();

    return (
        <div className={`flex flex-col items-center border-b p-8 ${t.border}`}>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl 
                bg-blue-600 text-2xl font-bold text-white shadow-lg"> CH </div>
            <h1 className={`mt-4 text-3xl font-bold ${t.heading }`}>CareerHub</h1>
            <p className={`mt-1 text-sm ${t.subText}`}>Your Creeer Companion</p>
        </div>
    );
}