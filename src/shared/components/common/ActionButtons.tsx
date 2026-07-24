import { Eye, Pencil, Trash2 } from "lucide-react";
import { useAppTheme } from "@/shared/theme/theme";

type Props = {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function ActionButtons({
  onView,
  onEdit,
  onDelete,
}: Props) {
  const t = useAppTheme();

  return (
    <div className="flex items-center gap-2">
      {onView && (
        <button
          onClick={onView}
          className={t.secondaryButton}
        >
          <Eye size={18} />
          View
        </button>
      )}

      {onEdit && (
        <button
          onClick={onEdit}
          className={t.primaryButton}
        >
          <Pencil size={18} />
          Edit
        </button>
      )}

      {onDelete && (
        <button
          onClick={onDelete}
          className={t.dangerButton}
        >
          <Trash2 size={18} />
          Delete
        </button>
      )}
    </div>
  );
}