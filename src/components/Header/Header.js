import React, { useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material/";
import { setCountryCode } from "../../features/actions";
import { useDispatch } from "react-redux";
import { TEXTS } from "../../constants/index";
import "./header.css";
export const Header = ({ countries }) => {
  console.log(countries,'....')
  const [country, setCountry] = useState("worldwide");
  const dispatch = useDispatch();

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
          <MenuItem value="worldwide">{TEXTS.WORLDWIDE}</MenuItem>
          {countries &&
            countries.map((country) => (
              <MenuItem key={country.id} value={country.value}>{country.name}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};
