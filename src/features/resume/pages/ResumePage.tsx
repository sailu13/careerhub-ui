import { useEffect, useState } from "react";
import { deleteResume, downloadResume, getResume, uploadResume } from "../services/resumeService";
import type { ResumeResponse } from "../types/resume";
import PageHeader from "@/shared/components/common/PageHeader";
import Badge from "@/shared/components/common/Badge";
import LoadingSkeleton from "@/shared/components/common/LoadingSkeleton";
import { toast } from "sonner";
import ResumeUploadCard from "../components/ResumeUploadCard";
import { FileText, Download, RefreshCw, Trash2, Calendar, HardDrive } from "lucide-react";
import { useLocation } from "react-router-dom";
import AppCard from "@/shared/components/common/AppCard";
import { useTheme } from "@/context/ThemeContext";

export default function ResumePage() {
  const [resume, setResume] = useState<ResumeResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  const showBack = location.state?.fromDashboard ?? false;
  const { theme } = useTheme();

  async function loadResume() {
    try {
      const response = await getResume();
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setResume(response.data.data);
    } catch {
      setResume(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadResume();
  }, []);

  async function handleUpload(file: File) {
    try {
      setUploading(true);
      setProgress(0);
      await uploadResume(file, (value) => { setProgress(value) });
      await new Promise((resolve) => setTimeout(resolve, 1400));
      toast.success("Resume uploaded successfully!");
      loadResume();
    } catch {
      toast.error("Upload failed.");
    } finally {
      setUploading(false)
      setProgress(0);
    }
  }

  async function handleDelete() {
    const confirmed = window.confirm("Are you sure you want to delete your Resume ?");

    if (!confirmed) return;

    try {
      await deleteResume();
      toast.success("Resume deleted Successfully")
      setResume(null);
    } catch {
      toast.error("Delete failed");
    }
  }

  async function handleDownload() {
    try {
      const response = await downloadResume();
      const blob = new Blob([response.data], { type: resume?.fileType, });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = resume?.fileName || "resume";

      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch {
      toast.error("Download Failed");
    }
  }

  function formatFileSize(bytes: number) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }

  function formatDate(date: string) {
    return new Date(date).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  }

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl space-y-6 p-8">
        <LoadingSkeleton className="h-10 w-60" />
        <LoadingSkeleton className="h-24 w-full" />
        <LoadingSkeleton className="h-20 w-full" />
        <LoadingSkeleton className="h-20 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title="Resume Management"
        subtitle="Upload and manage your resume"
        showBack={showBack}
      />

      <ResumeUploadCard
        uploading={uploading}
        progress={progress}
        onFileSelect={handleUpload} />

      {resume && (
        <AppCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          whileHover={{
            y: -4,
            scale: 1.01,
          }}
          className="hover:shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-red-600/20 p-3">
                <FileText
                  size={36}
                  className="text-red-500"
                />
              </div>

              <div>
                <h2 className="text-xl font-semibold">
                  {resume.fileName}
                </h2>

                <div className="mt-2">
                  <Badge>
                    {resume.fileType.includes("pdf")
                      ? "PDF"
                      : "DOCX"}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}

          <div
            className={`my-6 border-t ${theme === "light"
                ? "border-slate-200"
                : "border-slate-700"
              }`}
          />
          {/* Resume Details */}

          <div className="grid gap-5 md:grid-cols-2">

            <div className="flex items-center gap-3">
              <HardDrive
                size={20}
                className="text-blue-400"
              />

              <div>
                <p className="text-sm text-slate-400">
                  File Size
                </p>

                <p className="font-medium">
                  {formatFileSize(resume.fileSize)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar
                size={20}
                className="text-green-400"
              />

              <div>
                <p className="text-sm text-slate-400">
                  Last Updated
                </p>

                <p className="font-medium">
                  {formatDate(resume.updatedAt)}
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">

            <button
              onClick={handleDownload}
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
            >
              <Download size={18} />
              Download
            </button>

            <button
              onClick={() =>
                document.getElementById("resumeInput")?.click()
              }
              className="flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2 text-white transition hover:bg-green-700"
            >
              <RefreshCw size={18} />
              Replace
            </button>

            <button
              onClick={handleDelete}
              className="flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2 text-white transition hover:bg-red-700"
            >
              <Trash2 size={18} />
              Delete
            </button>

          </div>

        </AppCard>
      )}
    </div>
  );

}