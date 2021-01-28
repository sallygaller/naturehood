import React from "react";
import { className } from "../Utils/Utils";
import "./SpeciesAnalysis.css";

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

export default function SpeciesAnalysis(props) {
  const observations = props.observations;
  const speciesType = props.speciesType;
  return (
    <div className="SpeciesAnalysis">
      {countSpecies(speciesType, observations)}{" "}
      <img
        className="SpeciesAnalysis-img"
        alt={speciesType.type}
        src={className(speciesType)}
      />
      seen
    </div>
  );
}
