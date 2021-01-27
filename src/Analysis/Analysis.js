import React from "react";
import SpeciesAnalysis from "../SpeciesAnalysis/SpeciesAnalysis";
import moment from "moment";
import { speciesTypes } from "../Utils/Utils";

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
            <SpeciesAnalysis
              speciesType={speciesType}
              observations={observations}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
