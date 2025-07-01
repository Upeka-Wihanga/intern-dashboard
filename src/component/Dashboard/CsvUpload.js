import React, { useState } from "react";
import { Button, Box, Typography, LinearProgress } from "@mui/material";
import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || "https://intern-management-production.up.railway.app";

const CsvUpload = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage("");
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setMessage("");
    const formData = new FormData();
    formData.append("file", file);
    try {
      await axios.post(`${apiBaseUrl}/api/bulk-upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("Upload successful!");
      setFile(null);
      if (onUploadSuccess) onUploadSuccess();
    } catch (err) {
      setMessage("Upload failed!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Bulk CSV Upload
      </Typography>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        style={{ marginRight: 8 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        disabled={!file || uploading}
      >
        Upload
      </Button>
      {uploading && <LinearProgress sx={{ mt: 1, width: 200 }} />}
      {message && (
        <Typography sx={{ mt: 1 }} color={message.includes("success") ? "green" : "red"}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default CsvUpload;