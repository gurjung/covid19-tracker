import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";

export const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      {/* <h1>IM IN MAP</h1> */}
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LeafletMap>
    </div>
  );
};
