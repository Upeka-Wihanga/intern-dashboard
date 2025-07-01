import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";

const ModuleDrilldown = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Adjust this endpoint if your backend structure is different
    axios.get("https://intern-management-production.up.railway.app/api/projects").then((res) => {
      setProjects(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <div style={{ marginTop: 24 }}>
      <Typography variant="h6" gutterBottom>
        Project Module Drilldown
      </Typography>
      {projects.map((project) => (
        <Accordion key={project.projectId}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              {project.projectName} ({project.assignedTeamName})
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* Modules */}
            {project.modules && project.modules.length > 0 ? (
              project.modules.map((module) => (
                <Accordion key={module.moduleId} sx={{ ml: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                      Module: {module.moduleName} ({module.status})
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* Functions */}
                    {module.functions && module.functions.length > 0 ? (
                      module.functions.map((func) => (
                        <Accordion key={func.functionId} sx={{ ml: 2 }}>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>
                              Function: {func.functionName} ({func.status})
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            {/* Test Cases */}
                            <List dense>
                              {func.testCases && func.testCases.length > 0 ? (
                                func.testCases.map((tc) => (
                                  <ListItem key={tc.testCaseId}>
                                    <ListItemText
                                      primary={`Test Case: ${tc.testCaseName} (${tc.status})`}
                                      secondary={tc.description}
                                    />
                                  </ListItem>
                                ))
                              ) : (
                                <ListItem>
                                  <ListItemText primary="No test cases." />
                                </ListItem>
                              )}
                            </List>
                          </AccordionDetails>
                        </Accordion>
                      ))
                    ) : (
                      <Typography sx={{ ml: 2 }}>No functions.</Typography>
                    )}
                  </AccordionDetails>
                </Accordion>
              ))
            ) : (
              <Typography>No modules.</Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default ModuleDrilldown;