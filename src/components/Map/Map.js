import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "../../util/index";
import "./map.css";
export const Map = ({ countries, casesType, center, zoom }) => {
  console.log(countries, "countries");
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Draw circle on map */}
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
};
