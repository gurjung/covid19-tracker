import React from "react";
import "./map.css";
import {
  Map as LeafletMap,
  TileLayer,
  Circle,
  Popup,
} from "react-leaflet";
export const Map = ({ countries, casesType = "cases", center, zoom }) => {

  const casesTypeColors = {
    cases: {
      hex: "#CC1034",
      multiplier: 400, //size of circle
    },
    recovered: {
      hex: "#7dd71d",
      multiplier: 600,
    },
    deaths: {
      hex: "#fb4443",
      multiplier: 1000,
    },
  };
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Draw circles on Map */}
        {countries?.map((country) => (
          <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            color={casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].hex}
            fillOpacity={0.4}
            radius={
              /* sqrt of number of cases in country x casesType multiplier */
              Math.sqrt(country[casesType]) *
              casesTypeColors[casesType].multiplier
            }
          >
            <Popup>
              <h1>Im a PopUp</h1>
            </Popup>
          </Circle>
        ))}
      </LeafletMap>
    </div>
  );
};
