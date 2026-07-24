import api from "../client";
import { API } from "../endpoints";

export const getResume = () =>
  api.get(API.RESUME);

export const deleteResume = () =>
  api.delete(API.RESUME);

export const uploadResume = (
  file: File,
  onProgress?: (progress: number) => void
) => {

  const formData = new FormData();

  formData.append("file", file);

  return api.post(API.RESUME, formData, {

    headers: {
      "Content-Type": "multipart/form-data",
    },

    onUploadProgress(event) {

      if (!event.total) return;

      const progress = Math.round(
        (event.loaded * 100) / event.total
      );

      onProgress?.(progress);
    },
  });
};

export const downloadResume = () =>
  api.get(`${API.RESUME}/download`, {
    responseType: "blob",
  });