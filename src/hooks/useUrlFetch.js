import { useState, useEffect } from "react";
export const useUrlFetch = (url) => {
  const [data, setData] = useState([]);
  async function fetchApiData(url) {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }
  useEffect(() => {
    fetchApiData(url);
  }, [url]);
  return data;
};
