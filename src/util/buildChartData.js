export const buildChartData = (data, casesType = "cases") => {
  let chartData = [];
  let lastDataPoint; //to get current cases (12/2/22 - 11/2/22{last data point})
  for (let date in data.cases) {
    // for loop due to api data in obj form
    console.log(date, "inside for");
    if (lastDataPoint) {
      let newDataPoint = {
        x: date, //date = 12/2/22
        y: data[casesType][date] - lastDataPoint, //data[type][date] = particular date value 353715237
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};
