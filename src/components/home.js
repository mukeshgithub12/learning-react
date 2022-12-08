import React from "react";
import Garage from "../props/Garage";
import Stateone from "../props/stateone";
import Navbar from "./navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <h1>Home Page</h1>
      <Garage />
      <hr />
      <Stateone />
    </>
  );
};

export default Home;
