import React from "react";
import "./customhooks.css";
import { useState, useEffect } from "react";

const CustomHooks = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="tablescroll">
        <table className="table border">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Userid</th>
            </tr>
          </thead>

          <tbody>
            {" "}
            {data &&
              data.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.userId}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <button type="button" onClick={()=> alert('45')}>Click</button>
      </div>
    </>
  );
};

export default CustomHooks;
