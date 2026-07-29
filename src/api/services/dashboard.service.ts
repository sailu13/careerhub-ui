import http from "@/shared/services/http";
import { API } from "../endpoints";

export const getDashboard = () => http.get(API.DASHBOARD);