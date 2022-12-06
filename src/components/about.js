import React, { useState } from "react";
import Navbar from "./navbar";
const About = () => {
  const [data, setData] = useState("About Us Page");
  const [number, setNumber] = useState(0);
  function updateheading() {
    setData("React About Us Page ");
  }
  function updateheadingtwo() {
    setNumber(number + 1);
  }
  return (
    <>
      <Navbar />
      <h1>{data}</h1>
      <button onClick={updateheading}>Update</button>
      <hr />
      <h1>{number}</h1>
      <button onClick={updateheadingtwo}>Update</button>
    </>
  );
};

export default About;
