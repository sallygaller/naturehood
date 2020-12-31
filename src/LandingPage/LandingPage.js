import React from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <h2>connecting you to nature and neighbor</h2>
      <section>
        <header>
          <h3>Record your wildlife observations</h3>
        </header>
        <p>
          [<em>placeholder for screenshot of entering new observation</em>]
        </p>
        <p>
          Log your sightings with the species, date spotted, approximate
          location and a description.
        </p>
      </section>
      <section>
        <header>
          <h3>See what wildlife your neighbors have spotted</h3>
        </header>
        <p>
          [<em>placeholder for screenshot of map</em>]
        </p>
        <p>
          View your neighborhood's wildlife observations on a map. Apply filters
          to see a particular species or when it was seen.
        </p>
      </section>
      <section>
        <header>
          <h3>Analyze your sightings</h3>
        </header>
        <p>
          [<em>placeholder for screenshot of sighting dashboard</em>]
        </p>
        <p>
          Interactive charts show your historical sightings and observations of
          your favorite species.
        </p>
      </section>
      <section>
        <header>
          <h3>Start Exploring Your natureHood</h3>
        </header>
        <RegistrationForm />
      </section>
    </div>
  );
}
