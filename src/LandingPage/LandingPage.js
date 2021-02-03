import React from "react";
import { Link } from "react-router-dom";
import Screenshot1 from "../Utils/images/screenshot-1.png";
import Screenshot2 from "../Utils/images/screenshot-2.PNG";
import Screenshot3 from "../Utils/images/screenshot-3.PNG";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="LandingPage-header">
        <h2>Connecting You to Nature and Neighbor</h2>
      </div>
      <section className="LandingPage-first-section">
        <h3>See What Wildlife Lives in Your Neighborhood</h3>
        <p>View your neighborhood's wildlife observations on a map.</p>
        <img src={Screenshot1} alt="Screenshot of map with markers"></img>
      </section>
      <section className="LandingPage-section">
        <h3>Record Your Wildlife Observations</h3>
        <p>
          Record your sightings with the species, date spotted, approximate
          location and a description.
        </p>
        <img
          src={Screenshot2}
          alt="Screenshot of map in Add Observation page"
        ></img>
      </section>
      <section className="LandingPage-section">
        <h3>Analyze Your Sightings</h3>
        <p>
          See how many mammals, birds, amphibians, anthropods, and fish you can
          spot!
        </p>
        <img
          src={Screenshot3}
          alt="Screenshot of map in Add Observation page"
        ></img>
      </section>
      <section className="LandingPage-section">
        <h3>Start Exploring Your natureHood</h3>
        <Link to="/register">
          <button type="button">Register</button>
        </Link>
        <br></br>
        <Link to="/login">
          <button type="button">Log in</button>
        </Link>
        <p className="LandingPage-instructions">
          For demo purposes, please use the credentials provided on the Login
          page.
        </p>
      </section>
    </div>
  );
}
