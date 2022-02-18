import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
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
  const options = {
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };
  const buildChartData = (data, type = "cases") => {
    let chartData = [];
    let lastDataPoint; //to get current cases (12/2/22 - 11/2/22{last data point})
    for (let date in data.cases) {
      // for loop due to api data in obj form
      console.log(date, "inside for");
      if (lastDataPoint) {
        let newDataPoint = {
          x: date, //date = 12/2/22
          y: data[type][date] - lastDataPoint, //data[type][date] = particular date value 353715237
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[type][date];
    }
    return chartData;
  };
  return (
    <div className="graph">
      <h1>IM IN GRAPH</h1>
      {/* <Line data={sampleData} options={options}/> */}
      {/* <Line
        data={{
          // x-axis label values
          labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          datasets: [
            {
              label: "# of Calories Lost",
              // y-axis data plotting values
              data: [200, 300, 1300, 520, 2000, 350, 150],
              fill: false,
              borderWidth: 4,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "green",
              responsive: true,
            },
          ],
        }}
      /> */}
    </div>
  );
};
