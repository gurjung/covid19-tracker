import React, { useState, useEffect } from "react";
import { FormControl, MenuItem, Select } from "@mui/material/";
import { useUrlFetch } from "../Hooks/useUrlFetch";
export const Header = () => {
  //   https://disease.sh/v3/covid-19/countries
  const [country, setCountry] = useState("worldwide");
  const data = useUrlFetch("https://disease.sh/v3/covid-19/countries");

  const countries = data.map((item) => {
    return {
      name: item.country,
      value: item.countryInfo.iso3,
    };
  });

  const onCountryChange = (e) => {
    const countryCode = e.target.value;
    console.log(countryCode, "countryCode");
    setCountry(countryCode);
  };
  return (
    <div className="app__header">
      {/* Title */}
      <h1>COVID19 TRACKER</h1>
      {/* Dropdown of countries */}
      <FormControl className="app__dropdown">
        <Select variant="outlined" value={country} onChange={onCountryChange}>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {countries &&
            countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};
