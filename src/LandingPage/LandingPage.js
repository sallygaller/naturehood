import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="LandingPage-header">
        <h2>Connecting You to Nature and Neighbor</h2>
      </div>
      <section className="LandingPage-first-section">
        <h3>Record Your Wildlife Observations</h3>
        <p>
          [<em>placeholder for screenshot of entering new observation</em>]
        </p>
        <p>
          Record your sightings with the species, date spotted, approximate
          location and a description.
        </p>
      </section>
      <section className="LandingPage-section">
        <h3>See What Wildlife Lives in Your Neighborhood</h3>
        <p>
          [<em>placeholder for screenshot of map</em>]
        </p>
        <p>
          View your neighborhood's wildlife observations on a map. Apply filters
          to see a particular species or when it was seen.
        </p>
      </section>
      <section className="LandingPage-section">
        <h3>Analyze Your Sightings</h3>
        <p>
          [<em>placeholder for screenshot of observations</em>]
        </p>
        <p>
          Interactive charts show your historical sightings and observations of
          your favorite species.
        </p>
      </section>
      <section className="LandingPage-section">
        <h3>Start Exploring Your natureHood</h3>
        <button type="button">
          <Link className="LandingPage-link" to="/register">
            Register
          </Link>{" "}
        </button>
        <br></br>
        <button type="button">
          <Link to="/login">Log in</Link>
        </button>
        <p className="LandingPage-instructions">
          For demo purposes, please use the credentials provided on the Login
          page.
        </p>
      </section>
    </div>
  );
}
