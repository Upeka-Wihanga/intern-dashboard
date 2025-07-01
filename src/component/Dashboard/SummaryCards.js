import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const cardStyles = [
  { background: "#1976d2", color: "#fff" },
  { background: "#388e3c", color: "#fff" },
  { background: "#fbc02d", color: "#fff" },
  { background: "#d32f2f", color: "#fff" },
];

const SummaryCards = ({ summary }) => (
  <Grid container spacing={2} sx={{ mb: 2 }}>
    {[
      { label: "Total Interns", value: summary.totalInterns || 0 },
      { label: "Total Teams", value: summary.totalTeams || 0 },
      { label: "Total Projects", value: summary.totalProjects || 0 },
      { label: "Modules In Progress", value: summary.modulesInProgress || 0 },
    ].map((item, idx) => (
      <Grid item xs={12} sm={6} md={3} key={item.label}>
        <Card sx={{ ...cardStyles[idx], boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6">{item.label}</Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              {item.value}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default SummaryCards;