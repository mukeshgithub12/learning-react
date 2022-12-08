import React from "react";
import { useState } from "react";
const Stateone = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });
  return (
    <>
      <h1>My {car.brand} 02</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  );
};

export default Stateone;
