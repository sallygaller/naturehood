import React from "react";
import { Link } from "react-router-dom";
import "./LandingPageNav.css";

export default function LandingPageNav() {
  return (
    <nav className="LandingPageNav">
      <Link to="/home">Home</Link> <Link to="/observations">Observations</Link>{" "}
      <Link to="/add-observation">Add Observation</Link> <button>Login</button>
    </nav>
  );
}
