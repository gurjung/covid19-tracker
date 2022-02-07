import React, { useState, useEffect } from "react";
import { FormControl, MenuItem, Select } from "@mui/material/";
import { useUrlFetch } from "../Hooks/useUrlFetch";
import { setCountryCode } from "../Actions";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const [country, setCountry] = useState("worldwide");
  const dispatch = useDispatch();
  const url = "https://disease.sh/v3/covid-19/countries";
  const data = useUrlFetch(url);

  const countries = data.map((item) => {
    return {
      name: item.country,
      value: item.countryInfo.iso3,
    };
  });

  const onCountryChange = (e) => {
    const code = e.target.value;
    console.log(code, "header countryCode");
    // code is Country Code
    setCountry(code);
    dispatch(setCountryCode(code));
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
