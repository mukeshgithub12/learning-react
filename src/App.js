// import logo from './logo.svg';
// ==================pages list =============
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Events from "./components/events";
// import Navbar from "./navbar";

// ==================pages list end =============

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="events" element={<Events />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
