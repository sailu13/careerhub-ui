import api from "../client";
import { API } from "../endpoints";

export const getProfile = () =>
  api.get(API.PROFILE);

export const updateProfile = (data: unknown) =>
  api.put(API.PROFILE, data);