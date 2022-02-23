import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import './map.css'
export const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      {/* <h1>IM IN MAP</h1> */}
      <LeafletMap center={center} zoom={zoom}>
      <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </LeafletMap>
    </div>
  );
};
