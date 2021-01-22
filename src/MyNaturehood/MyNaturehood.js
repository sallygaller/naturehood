import React from "react";
import MainMap from "../MainMap/MainMap";
import { dateFormat, timeFormat } from "../Utils/Utils";
import { API_ENDPOINT } from "../config";
import TokenService from "../services/token-service";
import "./MyNaturehood.css";

class MyNaturehood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      observations: [],
      observationsFilter: [],
      error: null,
    };
  }

  componentDidMount() {
    fetch(API_ENDPOINT + `/observations`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(console.log(res.status));
        }
        return res.json();
      })
      .then((observations) => {
        this.setState({
          observations: observations,
          observationsFilter: observations,
        });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  handleTypeChange = (e) => {
    this.setState({
      observationsFilter: this.state.observations,
    });
    if (e.target.value === "All") {
      this.setState({
        observationsFilter: this.state.observations,
      });
    } else {
      const newObservations = this.state.observations.filter(
        (observation) => observation.type === e.target.value
      );
      this.setState({
        observationsFilter: newObservations,
      });
    }
  };

  render() {
    return (
      <div className="MyNaturehood">
        <h2>My natureHood</h2>
        <MainMap observations={this.state.observations} />
        <p className="MyNaturehood-instructions">
          Click on a marker to see a neighbor's observation.
        </p>
        <div className="MyNaturehood-species-filter">
          <select onClick={(e) => this.handleTypeChange(e)}>
            <option value="All">All Species</option>
            <option value="Mammal">Mammals</option>
            <option value="Bird">Birds</option>
            <option value="Arthropod">Arthropods</option>
            <option value="Amphibian">Amphibians</option>
            <option value="Reptile">Reptiles</option>
            <option value="Fish">Fish</option>
          </select>
        </div>
        <div className="MyNaturehood-observations">
          <h3>Recent Observations</h3>
          <ul>
            {this.state.observationsFilter.map((observation) => (
              <li key={observation.id}>
                <div className="MyNaturehood-item MyNaturehood-title">
                  {observation.species}
                </div>
                <div className="MyNaturehood-item">
                  Date: {dateFormat(observation)}
                  <br></br>
                  Time: {timeFormat(observation)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default MyNaturehood;
