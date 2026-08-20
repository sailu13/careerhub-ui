import { useApplyJob } from "../hooks/useApplyJob";
import { toast } from "sonner";
import PrimaryButton from "@/shared/components/buttons/PrimaryButton";

interface Props {
  jobId: number;
  onSuccess?: () => void;
}

export default function ApplyJobForm({
  jobId,
  onSuccess,
}: Props) {

  const { apply, loading } = useApplyJob();

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      const result = await apply(jobId);

      if (result.success) {
        toast.success(
          "Application submitted successfully!"
        );

        onSuccess?.();
      } else {
        toast.error(result.message);
      }

    } catch (error: any) {

      const message =
        error?.response?.data?.message ||
        "Failed to submit application.";

      toast.error(message);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <PrimaryButton
        type="submit"
        className="w-full"
        disabled={loading}
      >
        {loading
          ? "Submitting..."
          : "Apply Now"}
      </PrimaryButton>
    </form>
  );
}