import React from "react";
import { Link, withRouter } from "react-router-dom";
import Observation from "../Observation/Observation";
import Analysis from "../Analysis/Analysis";
import { API_ENDPOINT } from "../config";
import TokenService from "../services/token-service";
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
  };

  componentDidMount() {
    fetch(API_ENDPOINT + `/observations/user`, {
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
      .then(this.setObservations)
      .catch((error) => {
        console.error(error);
      });
  }

  handleDeleteObservation = (observationId) => {
    const newObservations = this.state.observations.filter(
      (observation) => observation.id !== observationId
    );
    this.setState({
      observations: newObservations,
    });
  };

  handleDeleteRequest = (id) => {
    fetch(API_ENDPOINT + `/observations/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((error) => Promise.reject(error));
        return res;
      })
      .then((data) => {
        this.handleDeleteObservation(id);
        this.props.history.push("/observations/user");
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    return (
      <div className="ObservationList">
        <h2>My Observations</h2>
        <Link to={"/add-observation"}>
          <button className="ObservationList-button" type="button">
            Add Observation
          </button>
        </Link>
        <div>
          <ul>
            {this.state.observations
              .sort((a, b) => (a.date < b.date ? 1 : -1))
              .map((observation) => (
                <li key={observation.id}>
                  <Observation
                    observation={observation}
                    handleDeleteRequest={this.handleDeleteRequest}
                  />
                </li>
              ))}
          </ul>
        </div>
        <Analysis observations={this.state.observations} />
      </div>
    );
  }
}

export default withRouter(ObservationList);
