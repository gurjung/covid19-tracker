import React from "react";
import { sortData } from "../../util";
import "./table.css";
export const Table = ({ data }) => {
  const sortedData = sortData(data);
  return (
    <div className="table">
      {sortedData.map(({ id, name, cases }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>
            <strong>{cases}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};
