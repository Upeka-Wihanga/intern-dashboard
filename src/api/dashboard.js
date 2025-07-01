import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/dashboard",
});

export const getSummary = () => api.get("/summary");
export const getProjects = () => api.get("/projects");
export const getTestCaseAnalytics = () => api.get("/test-case-analytics");
export const getNotifications = () => api.get("/notifications");