import React from "react";
import { Card, CardContent, Typography, List, ListItem, ListItemText } from "@mui/material";

const Notifications = ({ notifications }) => (
  <Card>
    <CardContent>
      <Typography variant="h6">Notifications</Typography>
      <List>
        {notifications.length === 0 && (
          <ListItem>
            <ListItemText primary="No notifications." />
          </ListItem>
        )}
        {notifications.map((note, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={note} />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default Notifications;