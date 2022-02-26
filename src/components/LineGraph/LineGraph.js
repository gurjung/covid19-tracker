import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { options } from "./linegraph.data";
import { buildChartData } from "../../util/index";
export const LineGraph = ({ data, casesType = "cases" }) => {
  const [graphData, setGraphData] = useState({});

  useEffect(() => {
    const chartData = buildChartData(data, casesType);
    setGraphData(chartData);
  }, [casesType, data]);
  return (
    <div className="graph">
      {graphData?.length && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
                data: graphData,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
};
