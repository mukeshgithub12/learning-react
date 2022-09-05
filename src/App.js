// import logo from './logo.svg';
import Demo from './components/demo';
import Props from './components/props' ;
// import './App.css';
import Propsfunction from './components/propsWithfunction';
import  PropsWithState from  './components/props_width_state'; 
import  Changingobject from  './components/Changingobject'; 
function App() {


  return (
    
    <>
    <Demo name="Mukesh Kumar"/>
    <hr/>
    <Props name="This is props value"/>
    <hr/>
    <PropsWithState/>
    <hr/>
    <Changingobject/>
    <hr/>
    <Propsfunction name="Props With function component "  />
    </>
  );
}

export default App;
