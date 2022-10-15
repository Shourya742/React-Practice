import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Link to={"insta"}>
        <h1>Contact via Instagram</h1>
      </Link>
      <Link to={"mail"}>
        <h1>Contact via Mail</h1>
      </Link>
      <Outlet />
    </>
  );
};

export default Contact;
