import React from "react";
import MainMap from "../MainMap/MainMap";
import { API_ENDPOINT } from "../config";
import TokenService from "../services/token-service";
import "./MyNaturehood.css";

class MyNaturehood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      observations: [],
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
        this.setState({ observations });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  render() {
    return (
      <div className="MyNaturehood">
        <h2>My natureHood</h2>
        <MainMap observations={this.state.observations} />
        <p className="MyNaturehood-instructions">
          Click on a marker to see a neighbor's observation.
        </p>
        <div className="MyNaturehood-date-filter">
          <input
            type="text"
            id="startDate"
            placeholder="Start Date"
            name="startDate"
          ></input>
          <input
            type="text"
            id="endDate"
            placeholder="End Date"
            name="endDate"
          ></input>
        </div>
        <div className="MyNaturehood-species-filter">
          <select>
            <option value="all">All Species</option>
            <option value="robin">Robin</option>
            <option value="fox">Fox</option>
            <option value="raccoon">Raccoon</option>
          </select>
        </div>
        <div className="MyNaturehood-observations">
          <h3>Recent Observations</h3>
          <ul>
            {this.state.observations.map((observation) => (
              <li key={observation.id}>
                <div className="MyNaturehood-item MyNaturehood-title">
                  {observation.species}
                </div>
                <div className="MyNaturehood-item">
                  Date: {observation.date}
                  <br></br>
                  Time: {observation.time} {observation.ampm}
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
