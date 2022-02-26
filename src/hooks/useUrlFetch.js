import { useState, useEffect } from "react";
export const useUrlFetch = (url) => {
  const [data, setData] = useState([]);
  async function fetchApiData(url) {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    fetchApiData(url);
  }, [url]);
  return data;
};
