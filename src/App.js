import { useState, useEffect } from "react";
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
import "leaflet/dist/leaflet.css";

export const App = () => {
  const country = useSelector((state) => state.country);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const url =
    country === "worldwide" ? URLS.WORLDWIDE : URLS.ALL_COUNTRIES + country;
  const data = useUrlFetch(url);
  console.log(data, "...");
  const allCountriesData = useUrlFetch(URLS.ALL_COUNTRIES);
  const countriesData = allCountriesData.map((item) => {
    return {
      id: nanoid(4),
      name: item.country,
      value: item.countryInfo.iso3,
      cases: item.cases,
    };
  });

  const lineGraphData = useUrlFetch(URLS.LAST_DAYS);
  useEffect(() => {
    data.countryInfo &&
      setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
    setMapCountries(allCountriesData);
    setMapZoom(4);
  }, [allCountriesData, data.countryInfo]);
  return (
    <div className="app">
      <div className="app__left">
        <Header countries={countriesData} />
        <div className="app__stats">
          <InfoBox
            onClick={() => setCasesType("cases")}
            active={casesType === "cases"}
            title="Corona Cases"
            cases={data.todayCases}
            totalCases={data.cases}
          />
          <InfoBox
            onClick={() => setCasesType("recovered")}
            active={casesType === "recovered"}
            title="Recovered Cases"
            cases={data.todayRecovered}
            totalCases={data.recovered}
          />
          <InfoBox
            onClick={() => setCasesType("deaths")}
            active={casesType === "deaths"}
            title="Deaths Cases"
            cases={data.todayDeaths}
            totalCases={data.deaths}
          />
        </div>
        <Map
          casesType={casesType}
          countries={mapCountries}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>
      <Card className="app__right">
        {/* Table */}
        <CardContent>
          <h3>{TEXTS.LIVE_CASES}</h3>
          <Table data={countriesData} />
          {/* Graph */}
          <h3 className="app__graphTitle">
            {TEXTS.WORLDWIDE_NEW} {casesType}
          </h3>
          <LineGraph
            className="app__graph"
            data={lineGraphData}
            casesType={casesType}
          />
        </CardContent>
      </Card>
    </div>
  );
};
