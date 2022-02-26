import React from "react";
import { Circle, Popup } from "react-leaflet";
// Draw circles on Map
export const showDataOnMap = ({ countries=[], casesType = "cases" }) => {
  console.log(countries, "...");
  const casesTypeColors = {
    cases: {
      hex: "#CC1034",
      multiplier: 800, //size of circle
    },
    recovered: {
      hex: "#7dd71d",
      multiplier: 1200,
    },
    deaths: {
      hex: "#fb4443",
      multiplier: 2000,
    },
  };
  return countries.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        /* sqrt of number of cases in country x casesType multiplier */
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <h1>Im a PopUp</h1>
        </div>
      </Popup>
    </Circle>
  ));
};
