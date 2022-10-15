import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Userdetails = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  setSearchParams({});
  const reset = () => {
    searchParams({});
  };
  const { userId } = useParams();
  const [state, setState] = useState(2);
  const [data, setData] = useState({});
  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`
      );
      const res = await get.json();
      setData(res[0]);
    }
    getData();
  }, [state]);
  return (
    <>
      <h4>{data.id}</h4>
      <img src={data.imageUrl} />
      <h4>{data.firstName}</h4>
      <h4>{data.lastName}</h4>
      <h4>{data.email}</h4>
      <h4>{data.contactNumber}</h4>
      <h4>{data.age}</h4>
      <h4>{data.dob}</h4>
      <h4>{data.salary}</h4>
      <h4>{data.address}</h4>
      <button onClick={reset}>reset</button>
    </>
  );
};

export default Userdetails;
