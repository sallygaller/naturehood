import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function DemoNav() {
  return (
    <nav className="Nav">
      <NavLink
        to="/mynaturehood"
        activeStyle={{
          "font-weight": "bold",
        }}
      >
        My Naturehood
      </NavLink>{" "}
      <NavLink
        to="/observations"
        activeStyle={{
          "font-weight": "bold",
        }}
      >
        My Observations
      </NavLink>{" "}
      <NavLink
        to="/add-observation"
        activeStyle={{
          "font-weight": "bold",
        }}
      >
        Add Observation
      </NavLink>{" "}
      <NavLink
        to="/login"
        activeStyle={{
          "font-weight": "bold",
        }}
      >
        Login
      </NavLink>
    </nav>
  );
}
