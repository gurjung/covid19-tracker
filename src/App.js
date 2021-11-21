import "./App.css";
import { Header } from "./Components/Header";
import { InfoBox } from "./Components/InfoBox";
import { Map } from "./Components/Map";
// https://disease.sh/v3/covid-19/countries
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__stats">
        <InfoBox title="Corona Cases" cases="2000" totalCases="1232423423" />
        <InfoBox title="Recovered Cases" cases="2000" totalCases="1232423423" />
        <InfoBox title="Deaths Cases" cases="2000" totalCases="1232423423" />
      </div>
      <Map />
      {/* Table */}
      {/* chart */}

      {/* Map */}
    </div>
  );
}

export default App;
