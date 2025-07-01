import React, { useEffect, useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import SummaryCards from "./SummaryCards";
import ProjectStatusTable from "./ProjectStatusTable";
import TestCaseAnalytics from "./TestCaseAnalytics";
import Notifications from "./Notifications";
import CsvUpload from "./CsvUpload";
import ModuleDrilldown from "./ModuleDrilldown";
import {
  getSummary,
  getProjects,
  getTestCaseAnalytics,
  getNotifications,
} from "../../api/dashboard";

const DashboardPage = () => {
  const [summary, setSummary] = useState({});
  const [projects, setProjects] = useState([]);
  const [analytics, setAnalytics] = useState({});
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getSummary().then((res) => setSummary(res.data));
    getProjects().then((res) => setProjects(res.data));
    getTestCaseAnalytics().then((res) => setAnalytics(res.data));
    getNotifications().then((res) => setNotifications(res.data));
  }, []);

  const refreshData = () => {
    getSummary().then((res) => setSummary(res.data));
    getProjects().then((res) => setProjects(res.data));
    getTestCaseAnalytics().then((res) => setAnalytics(res.data));
    getNotifications().then((res) => setNotifications(res.data));
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700, color: "#1976d2" }}>
        Intern Management Dashboard
      </Typography>
      <CsvUpload onUploadSuccess={refreshData} />
      <SummaryCards summary={summary} />
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Box sx={{ flex: 2 }}>
          <ProjectStatusTable projects={projects} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <TestCaseAnalytics analytics={analytics} />
          <Notifications notifications={notifications} />
        </Box>
      </Box>
      <ModuleDrilldown />
    </Container>
  );
};

export default DashboardPage;