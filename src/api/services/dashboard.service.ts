import api from "../client";
import { API } from "../endpoints";

export const getDashboard = () =>
  api.get(API.DASHBOARD);