import React from "react";
import { Card, CardContent, Typography } from "@mui/material/";
import numeral from 'numeral';
import "./infoBox.css";
export const InfoBox = ({ title, cases, totalCases }) => {
  return (
    <Card className="infoBox">
      <CardContent>
        <Typography color="text.secondary">{title}</Typography>
        <h2 className="infoBox__cases">{numeral(cases).format("0.0a")}</h2>
        <Typography className="infoBox__total" color="text.secondary">{numeral(totalCases).format("0.0a")}</Typography>
      </CardContent>
    </Card>
  );
};
