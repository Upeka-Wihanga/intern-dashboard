import axios from "axios";

const api = axios.create({
  baseURL: "https://intern-management-production.up.railway.app/api/dashboard",
});

export const getSummary = () => api.get("/summary");
export const getProjects = () => api.get("/projects");
export const getTestCaseAnalytics = () => api.get("/test-case-analytics");
export const getNotifications = () => api.get("/notifications");