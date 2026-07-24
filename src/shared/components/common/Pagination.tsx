import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAppTheme } from "@/shared/theme/theme";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  const t = useAppTheme();

  if (totalPages <= 1) return null;

  return (
    <div className="mt-8 flex items-center justify-center gap-3">

      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`${t.secondaryButton} disabled:opacity-40`}
      >
        <ChevronLeft size={18} />
      </button>

      <span className={t.heading}>
        {currentPage} / {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`${t.secondaryButton} disabled:opacity-40`}
      >
        <ChevronRight size={18} />
      </button>

    </div>
  );
}