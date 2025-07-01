import React from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, LinearProgress
} from "@mui/material";

const ProjectStatusTable = ({ projects }) => (
  <TableContainer component={Paper} sx={{ mb: 2, boxShadow: 3 }}>
    <Table>
      <TableHead>
        <TableRow sx={{ backgroundColor: "#1976d2" }}>
          <TableCell sx={{ color: "#fff" }}>Project Name</TableCell>
          <TableCell sx={{ color: "#fff" }}>Team</TableCell>
          <TableCell sx={{ color: "#fff" }}>Project Manager</TableCell>
          <TableCell sx={{ color: "#fff" }}>Target Date</TableCell>
          <TableCell sx={{ color: "#fff" }}>Progress (%)</TableCell>
          <TableCell sx={{ color: "#fff" }}>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {projects.map((p, idx) => (
          <TableRow key={idx} hover>
            <TableCell>{p.projectName}</TableCell>
            <TableCell>{p.teamName}</TableCell>
            <TableCell>{p.pmName}</TableCell>
            <TableCell>{p.targetDate}</TableCell>
            <TableCell>
              <LinearProgress
                variant="determinate"
                value={p.progress || 0}
                sx={{ height: 10, borderRadius: 5 }}
                color={p.progress === 100 ? "success" : "primary"}
              />
              <span style={{ marginLeft: 8 }}>{p.progress || 0}%</span>
            </TableCell>
            <TableCell>{p.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default ProjectStatusTable;