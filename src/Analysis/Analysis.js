import React from "react";
import moment from "moment";

function countSpecies(observations, observation) {
  let count = observations.filter((obs) => obs.type === observation.type)
    .length;
  return count;
}

function dateLatest(observations) {
  let date = "";
  for (let i = 0; i < observations.length; i++) {
    if (observations[i].date > date) {
      date = observations[i].date;
    }
  }
  return moment(date).format("L");
}

function dateEarliest(observations) {
  let date = "3000-12-12";
  for (let i = 0; i < observations.length; i++) {
    if (observations[i].date < date) {
      date = observations[i].date;
    }
  }
  return moment(date).format("L");
}

export default function Analysis(props) {
  const observations = props.observations;
  return (
    <div className="Analysis">
      <p>
        Total observations: {observations.length} <br></br>
        First observation: {dateEarliest(observations)} <br></br>
        Latest observation: {dateLatest(observations)}
      </p>
      <ul>
        {observations.map((observation) => (
          <li key={observation.id}>
            {countSpecies(observations, observation)} {observation.type} seen{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
