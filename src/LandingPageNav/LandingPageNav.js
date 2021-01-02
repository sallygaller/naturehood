import React from "react";
import { Link } from "react-router-dom";
import "./LandingPageNav.css";

export default function LandingPageNav() {
  return (
    <nav className="LandingPageNav">
      <Link to="/mynaturehood">Demo </Link>
      <button>Login</button>
    </nav>
  );
}
