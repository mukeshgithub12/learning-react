import React, { useState } from "react";
import Car from "./car";

function Garage() {
  const cars = ["Ford", "BMW", "Audi"];
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");
  const mybtn = {
    border: "none",
    fontSize: "16px",
    padding: "10px",
    backgroundColor: "lightgreen",
  };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul style={{ color: "red", display: "grid", padding: "10px" }}>
        {cars.map((car) => (
          <Car brand={car} />
        ))}
      </ul>
      <h4>{color}</h4>
      <button style={mybtn} onClick={() => setColor("My favorite color Red")}>
        Change Color
      </button>

      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  );
}

export default Garage;
