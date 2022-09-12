import React, { useState } from "react";

const Form = () => {
  const [mycar, setMycar] = useState();
  const [count, setCount] = useState(0);
  const handleChange = (event) => {
    setMycar(event.target.value);
  };

  const increment = () => {
    setCount((c) => c + 1);
  };
  const [color,setColor] = useState();
  return (
    <>
      <form>
        <select value={mycar} onChange={handleChange}>
          <option value="Volvo">Valvo</option>
          <option value="Ford">Ford</option>
          <option value="Tata">Tata</option>
          <option value="Safari">Safari</option>
        </select>
      </form>

      <h1>Count {count}</h1>
      <button onClick={increment} style={{ color: "red" }}>
        Count
      </button>

      <h1>My Favorite Color : {color}</h1>
      <button onClick={() => setColor('red')}> Red</button>
      <button onClick={() => setColor('green')}> Green</button>
      <button onClick={() => setColor('Yellow')}> Yellow</button>
      <button onClick={() => setColor('Pink')}> Pink</button>

     
    </>
  );
};

export default Form;
