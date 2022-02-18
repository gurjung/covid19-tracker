import { Header } from "./components/Header/Header";
import { InfoBox } from "./components/InfoBox/InfoBox";
import { Map } from "./components/Map/Map";
import { Table } from "./components/Table/Table";
import { LineGraph } from "./components/LineGraph/LineGraph";
import { Card, CardContent } from "@mui/material/";
import { useSelector } from "react-redux";
import { useUrlFetch } from "./hooks/index";
import { TEXTS, URLS } from "./constants/index";
import { nanoid } from "nanoid";
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

  const allCountriesData = useUrlFetch(URLS.ALL_COUNTRIES);
  const countriesData = allCountriesData.map((item) => {
    return {
      id: nanoid(4),
      name: item.country,
      value: item.countryInfo.iso3,
      cases: item.cases,
    };
  });

  return (
    <div className="app">
      <div className="app__left">
        <Header countries={countriesData} />
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
          <h3>Live Cases by Country</h3>
          <Table data={countriesData} />
        </CardContent>
        {/* Graph */}
        <CardContent>
          <h3>{TEXTS.WORLDWIDE_NEW_CASES}</h3>
          <LineGraph />
        </CardContent>
      </Card>
    </div>
  );
};
