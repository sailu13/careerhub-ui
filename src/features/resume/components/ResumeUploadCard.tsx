import { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";

type Props = {
  uploading: boolean;
  progress: number;
  onFileSelect: (file: File) => void;
};

export default function ResumeUploadCard({
  uploading,
  progress,
  onFileSelect,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  function handleFile(file: File | null) {
    if (!file) return;
    onFileSelect(file);
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
        handleFile(e.dataTransfer.files[0]);
      }}
      onClick={() => inputRef.current?.click()}
      className={`cursor-pointer rounded-xl border-2 border-dashed p-12 text-center transition-all duration-300

      ${
        dragging
          ? "border-blue-500 bg-blue-900/20 scale-[1.02]"
          : "border-slate-700 bg-slate-800 hover:border-blue-500 hover:bg-slate-700"
      }`}
    >
      <UploadCloud
        size={60}
        className="mx-auto mb-6 text-blue-500"
      />

      <h2 className="text-2xl font-bold">
        Drag & Drop Resume Here
      </h2>

      <p className="mt-3 text-slate-400">
        or click to browse your computer
      </p>

      <p className="mt-5 text-sm text-slate-500">
        PDF / DOCX • Maximum 5 MB
      </p>

      <button
        type="button"
        disabled={uploading}
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        Browse Files
      </button>

      {uploading && (
        <div className="mt-8">
            <div className="mb-2 flex justify-between text-sm text-slate-300">
                <span>Loading.....</span>
                <span>{progress}%</span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-700">
                <div className="h-full rounded-full bg-blue-500 transition-all duration-300" 
                    style={{width: `${progress}%`}}/>
            </div>
        </div>
      )}

      <input
      id="resumeInput"
        ref={inputRef}
        hidden
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => handleFile(e.target.files?.[0] || null)}
      />
    </div>
  );
}