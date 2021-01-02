import React from "react";
import { Link } from "react-router-dom";
import "./DemoNav.css";

export default function DemoNav() {
  return (
    <nav className="DemoNav">
      <Link to="/home">Home</Link> <Link to="/observations">Observations</Link>{" "}
      <Link to="/add-observation">Add Observation</Link> <button>Login</button>
    </nav>
  );
}
