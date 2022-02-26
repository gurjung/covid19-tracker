import React from "react";
import { Card, CardContent, Typography } from "@mui/material/";
import "./infoBox.css";
export const InfoBox = ({ title, cases, totalCases }) => {
  return (
    <Card className="infoBox">
      <CardContent>
        <Typography color="text.secondary">{title}</Typography>
        <h2 className="infoBox__cases">{cases}</h2>
        <Typography className="infoBox__total" color="text.secondary">{totalCases}</Typography>
      </CardContent>
    </Card>
  );
};
