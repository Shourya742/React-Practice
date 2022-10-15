import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const call = await fetch(url);
      const res = await call.json();
      setData(res);
    }
  }, []);
  return [data];
};

export default useFetch;
