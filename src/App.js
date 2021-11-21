import "./App.css";
import { Header } from "./Components/Header";
import { InfoBox } from "./Components/InfoBox";
import { Map } from "./Components/Map";
import { Card, CardContent, Typography } from "@mui/material/";
// https://disease.sh/v3/covid-19/countries
function App() {
  return (
    <div className="app">
      <div className="app__left">
        <Header />
        <div className="app__stats">
          <InfoBox title="Corona Cases" cases="2000" totalCases="1232423423" />
          <InfoBox
            title="Recovered Cases"
            cases="2000"
            totalCases="1232423423"
          />
          <InfoBox title="Deaths Cases" cases="2000" totalCases="1232423423" />
        </div>
        <Map />
      </div>
      <Card className="app__right">
        {/* Table */}
        <CardContent>
          <h3>Cases by country</h3>
        </CardContent>
        {/* Chart */}
        <CardContent>
          <h3>Worldwide new cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
