import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { Card, CardContent, Typography, Box } from "@mui/material";

const COLORS = ["#4caf50", "#f44336", "#ff9800"];

const TestCaseAnalytics = ({ analytics }) => {
  const data = [
    { name: "Pass", value: analytics.pass || 0 },
    { name: "Fail", value: analytics.fail || 0 },
    { name: "Not Run", value: analytics.notRun || 0 },
  ];
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">Test Case Analytics</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <PieChart width={300} height={240}>
            <Pie
              data={data}
              cx={150}
              cy={100}
              innerRadius={40}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label
            >
              {data.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              wrapperStyle={{ marginTop: 16 }}
            />
          </PieChart>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TestCaseAnalytics;