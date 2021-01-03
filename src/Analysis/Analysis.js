import React from "react";

function countSpecies(observations, observation) {
  let count = observations.filter((obs) => obs.species === observation.species)
    .length;
  return count;
}

export default function Analysis(props) {
  const observations = props.observations;
  return (
    <div className="Analysis">
      <p>
        Total observations: {observations.length} <br></br>
        First observation: 12/10/2020 <br></br>
        Last observation: 12/31/2020
      </p>
      <ul>
        {observations.map((observation) => (
          <li key={observation.id}>
            {countSpecies(observations, observation)} {observation.species} seen{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
