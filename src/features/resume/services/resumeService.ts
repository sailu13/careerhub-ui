import http from "@/shared/services/http";


export async function getResume() {
    return http.get("/api/resume");
}

export async function uploadResume(
  file: File,
  onProgress?: (progress: number) => void
) {
  const formData = new FormData();
  formData.append("file", file);

  return http.post("/api/resume/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (event) => {
      if (event.total) {
        const progress = Math.round((event.loaded * 100) / event.total);
        onProgress?.(progress);
      }
    },
  });
}

export async function deleteResume() {
    return http.delete("/api/resume");
}

export async function downloadResume() {
    return http.get("/api/resume/download", {responseType: "blob", });
}