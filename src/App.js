// import logo from './logo.svg';
import Demo from "./components/demo";
import Props from "./components/props";
// import './App.css';
import Propsfunction from "./components/propsWithfunction";
import PropsWithState from "./components/props_width_state";
import Changingobject from "./components/Changingobject";
import Form from "./components/form";
import CustomHooks from "./components/customhooks";
import Toggle from "./components/toggle";
import TodoList from "./components/TodoList.";
function App() {
  const carInfo = { name: "Ford", model: "Mustang" };

  return (
    <>
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
    </>
  );
}

export default App;
