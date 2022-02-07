import { Header } from "./components/Header/Header";
import { InfoBox } from "./components/InfoBox/InfoBox";
import { Map } from "./components/Map/Map";
import { Table } from "./components/Table/Table";
import { Card, CardContent } from "@mui/material/";
import { useSelector } from "react-redux";
import { useUrlFetch } from "./hooks/index";
import { TEXTS, URLS } from "./constants/index";
import "./App.css";
// https://disease.sh/v3/covid-19/countries
export const App = () => {
  const country = useSelector((state) => state.country);
  const url =
    country === "worldwide"
      ? URLS.WORLDWIDE
      : `https://disease.sh/v3/covid-19/countries/${country}`;
  const data = useUrlFetch(url);
  console.log(data, "info box data");
  // const countryInfo = data.map((item) => {
  //   return {
  //     todayCases: item.todayCases,
  //     todayDeaths: item.todayDeaths,
  //     todayRecovered: item.todayRecovered,
  //     totalCases: item.cases,
  //     totalDeaths: item.deaths,
  //     totalRecovered: item.recovered,
  //   };
  // });
  return (
    <div className="app">
      <div className="app__left">
        <Header />
        <div className="app__stats">
          <InfoBox
            title="Corona Cases"
            cases={data.todayCases}
            totalCases={data.cases}
          />
          <InfoBox
            title="Recovered Cases"
            cases={data.todayRecovered}
            totalCases={data.recovered}
          />
          <InfoBox
            title="Deaths Cases"
            cases={data.todayDeaths}
            totalCases={data.deaths}
          />
        </div>
        <Map />
      </div>
      <Card className="app__right">
        {/* Table */}
        <CardContent>
          <Table />
        </CardContent>
        {/* Chart */}
        <CardContent>
          <h3>{TEXTS.WORLDWIDE_NEW_CASES}</h3>
        </CardContent>
      </Card>
    </div>
  );
};
