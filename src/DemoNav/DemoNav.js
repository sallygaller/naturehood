import React from "react";
import { Link } from "react-router-dom";
import "./DemoNav.css";

export default function DemoNav() {
  return (
    <nav className="DemoNav">
      <Link to="/mynaturehood">My Naturehood</Link>{" "}
      <Link to="/observations">My Observations</Link>{" "}
      <Link to="/add-observation">Add Observation</Link>{" "}
    </nav>
  );
}
