import React from "react";
import { Card, CardContent, Typography } from "@mui/material/";

export const InfoBox = ({ title, cases, totalCases }) => {
  return (
    <Card>
      <CardContent>
        <Typography color="text.secondary">{title}</Typography>
        <h2>{cases}</h2>
        <Typography color="text.secondary">{totalCases}</Typography>
      </CardContent>
    </Card>
  );
};
