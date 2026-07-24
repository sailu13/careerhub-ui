import api from "../client";
import { API } from "../endpoints";

export const getJobs = () =>
  api.get(API.JOBS);

export const getJobById = (id: number) =>
  api.get(`${API.JOBS}/${id}`);