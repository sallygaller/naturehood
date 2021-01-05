import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function DemoNav() {
  return (
    <nav className="Nav">
      <NavLink
        to="/mynaturehood"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        My natureHood
      </NavLink>{" "}
      <NavLink
        to="/observations"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        My Observations
      </NavLink>{" "}
      <NavLink
        to="/add-observation"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        Add Observation
      </NavLink>{" "}
      <NavLink
        to="/login"
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        Login
      </NavLink>
    </nav>
  );
}
