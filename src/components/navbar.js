import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const navbar = () => {
  return (
    <ul>
      <li class="active">
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/contact">Contact Us</Link>
      </li>

      <li>
        <Link to="/events">Events</Link>
      </li>
    </ul>
  );
};

export default navbar;
