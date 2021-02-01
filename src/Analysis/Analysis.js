import React from "react";
import SpeciesAnalysis from "../SpeciesAnalysis/SpeciesAnalysis";
import moment from "moment";
import { speciesTypes } from "../Utils/Utils";
import "./Analysis.css";

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
      <h3>Species Log</h3>
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
