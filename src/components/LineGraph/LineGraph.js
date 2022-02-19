import React, { useState, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import { options } from "./linegraph.data";
import { buildChartData } from "../../util/index";
export const LineGraph = ({ data }) => {
  /*data format for Chart
    data=[{
        x:
        y:
    },{
        x:
        y:
    }]
*/
  const [graphData, setGraphData] = useState("");

  useEffect(() => {
    const chartData = buildChartData(data);
    setGraphData(chartData);
  }, [data]);
  return (
    <div className="graph">
      <h1>IM IN GRAPH</h1>
    </div>
  );
};
