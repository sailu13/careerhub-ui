import { useRef } from "react";

type Props = {
  onFileSelect: (file: File) => void;
};

export default function ResumeUpload({ onFileSelect }: Props) {

  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {

    if (!e.target.files?.length) return;

    onFileSelect(e.target.files[0]);
  }

  return (
    <div
      className="rounded-xl border-2 border-dashed border-slate-700 bg-slate-900 p-10 text-center"
    >

      <h2 className="text-2xl font-semibold">
        📄 Upload Resume
      </h2>

      <p className="mt-3 text-slate-400">
        PDF or DOCX • Max 5 MB
      </p>

      <button
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 hover:bg-blue-700"
        onClick={() => fileInputRef.current?.click()}
      >
        Browse Files
      </button>

      <input
        hidden
        ref={fileInputRef}
        type="file"
        accept=".pdf,.docx"
        onChange={handleChange}
      />

    </div>
  );
}