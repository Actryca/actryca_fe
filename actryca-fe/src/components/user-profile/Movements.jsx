"use client";
import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const Movements = () => {
  return (
    <>
      <Typography variant="h4">
        Hareketler
      </Typography> 
      <Paper elevation={3} sx={{ padding: 4, mt:2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Burada kullanıcı hareketleri görüntülenecek.
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default Movements;
