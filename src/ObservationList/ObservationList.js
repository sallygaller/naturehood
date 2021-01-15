import React from "react";
import { Link } from "react-router-dom";
import Observation from "../Observation/Observation";
import Analysis from "../Analysis/Analysis";
import { API_ENDPOINT } from "../config";
import "./ObservationList.css";

class ObservationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      observations: [],
      error: null,
    };
  }

  setObservations = (observations) => {
    this.setState({
      observations: observations,
      error: null,
    });
    console.log(this.state.observations);
  };

  componentDidMount() {
    fetch(API_ENDPOINT)
      .then((res) => {
        if (!res.ok) {
          throw new Error(console.log(res.status));
        }
        return res.json();
      })
      .then(this.setObservations)
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
  }

  render() {
    return (
      <div className="ObservationList">
        <h2>My Observations</h2>
        <div>
          <label htmlFor="Observations-sort">Sort by </label>
          <select>
            <option value="date-desc">Date (Newest to Oldest)</option>
            <option value="date-asc">Date (Oldest to Newest)</option>
            <option value="species">Species</option>
          </select>
        </div>
        <div>
          <ul>
            {this.state.observations.map((observation) => (
              <li key={observation.id}>
                <Observation observation={observation} />
              </li>
            ))}
          </ul>
          <Link to={"/add-observation"}>
            <button className="Observations-button" type="button">
              Add Observation
            </button>
          </Link>
        </div>
        <h3>Analysis</h3>
        <Analysis observations={this.state.observations} />
      </div>
    );
  }
}

export default ObservationList;
