import React from "react";
import { useUrlFetch } from "../../hooks";
import { sortData } from "../../util";
import { URLS } from "../../constants/index";
import "./table.css";
export const Table = () => {
  const url = URLS.ALL_COUNTRIES;
  const data = useUrlFetch(url);
  const sortedData = sortData(data);
  return (
    <div className="table">
      {sortedData.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{cases}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};
