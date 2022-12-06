import React from "react";
import TodoList from "./TodoList.";

import Demo from "./demo";
import Props from "./props";
// import './App.css';
import Propsfunction from "./propsWithfunction";
import PropsWithState from "./props_width_state";
import Changingobject from "./Changingobject";
import Form from "./form";
import CustomHooks from "./customhooks";
import Toggle from "./toggle";
import Navbar from "./navbar";
const Events = () => {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <div>
      <Navbar />
      <div className="container">
        <Demo name="Mukesh Kumar" />
        <hr />
        <Props name="This is props value" />
        <hr />
        <PropsWithState />
        <hr />
        <Changingobject />
        <hr />
        <Propsfunction name="Props With function component " brand={carInfo} />
        <hr />
        <div className="row">
          <div className="col-md-4">
            <Form />
          </div>
          <div className="col-md-4">
            <CustomHooks />
          </div>
          <div className="col-md-4">
            <Toggle />
          </div>
          <div className="col-md-4">
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
