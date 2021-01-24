import React from "react";
import { speciesTypes } from "../Utils/Utils";
import moment from "moment";

function countSpecies(speciesType, observations) {
  let type = speciesType.type;
  let results = 0;
  for (let i = 0; i < observations.length; i++) {
    if (observations[i].type === type) {
      results = results + 1;
    }
  }
  return results;
}

function dateLatest(observations) {
  let dates = observations.map((observation) => {
    return moment(observation.date);
  });
  let maxDate = moment.max(dates);
  let maxDateCreate = maxDate.creationData().input;
  let dateFormat = moment(maxDateCreate).format("L");
  return dateFormat;
}

export default function Analysis(props) {
  const observations = props.observations;
  return (
    <div className="Analysis">
      <p>
        Total observations: {observations.length} <br></br>
        Most recent observation: {dateLatest(observations)}
      </p>
      <ul>
        {speciesTypes.map((speciesType) => (
          <li key={speciesType.id}>
            {countSpecies(speciesType, observations)} {speciesType.type}
            {speciesType.type === "Fish" ? "" : "s"} seen
          </li>
        ))}
      </ul>
    </div>
  );
}
