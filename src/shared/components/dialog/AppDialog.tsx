import PrimaryButton from "../buttons/PrimaryButton";
import AppCard from "../common/AppCard";
import type { DialogType } from "./Dialog.types";

type Props = {
  open: boolean;
  type?: DialogType;
  title: string;
  message: string;
  buttonText?: string;
  onClose: () => void;
};

export default function AppDialog({
  open,
  type = "info",
  title,
  message,
  buttonText = "OK",
  onClose,
}: Props) {

  if (!open) return null;

  const colors = {
    success: "text-green-600",
    error: "text-red-600",
    warning: "text-yellow-600",
    info: "text-blue-600",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <AppCard className="w-full max-w-md space-y-6 rounded-2xl p-6">
        <h2 className={`text-2xl font-bold ${colors[type]}`}>
          {title}
        </h2>
        <p className="text-slate-500">
          {message}
        </p>
        <div className="flex justify-end">
          <PrimaryButton onClick={onClose}>
            {buttonText}
          </PrimaryButton>
        </div>
      </AppCard>
    </div>
  );
}