import React from "react";
import { casesTypeColors } from "../../util";
import numeral from "numeral";
import { Map as LeafletMap, TileLayer, Circle, Popup } from "react-leaflet";
import "./map.css";

export const Map = ({ countries, casesType = "cases", center, zoom }) => {
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
              <div className="info-container">
                <div
                  className="info-flag"
                  style={{
                    backgroundImage: `url(${country.countryInfo.flag})`,
                  }}
                ></div>
                <div className="info-name">{country.country}</div>
                <div className="info-confirmed">
                  Cases: {numeral(country.cases).format("0,0")}
                </div>
                <div className="info-recovered">
                  Recovered: {numeral(country.recovered).format("0,0")}
                </div>
                <div className="info-deaths">
                  Deaths: {numeral(country.deaths).format("0,0")}
                </div>
              </div>
            </Popup>
          </Circle>
        ))}
      </LeafletMap>
    </div>
  );
};
