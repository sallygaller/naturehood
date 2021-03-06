import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import AddObservationMap from "../AddObservationMap/AddObservationMap";
import TokenService from "../services/token-service";
import { API_ENDPOINT } from "../config";
import "./EditObservation.css";

class EditObservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      id: "",
      species: "",
      type: "",
      description: "",
      date: "",
      time: "",
      ampm: "",
      lng: null,
      lat: null,
    };
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }),
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {
    const { observationId } = this.props.match.params;
    fetch(API_ENDPOINT + `/observations/${observationId}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((error) => Promise.reject(error));
        return res.json();
      })
      .then((responseData) => {
        const dateFormat = moment(responseData.date).format("L");
        const timeFormat = moment(responseData.time, "hh:mm:ss").format(
          "hh:mm a"
        );
        const timeFormatSplit = timeFormat.split(" ");
        const time = timeFormatSplit[0];
        const ampm = timeFormatSplit[1];
        this.setState({
          id: responseData.id,
          species: responseData.species,
          type: responseData.type,
          description: responseData.description,
          date: dateFormat,
          time: time,
          ampm: ampm,
          lat: responseData.lat,
          lng: responseData.lng,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      id,
      species,
      type,
      description,
      date,
      time,
      ampm,
      lat,
      lng,
    } = this.state;
    const newObservation = {
      id,
      species,
      type,
      description,
      date,
      time,
      ampm,
      lat,
      lng,
    };
    fetch(API_ENDPOINT + `/observations/${this.state.id}`, {
      method: "PATCH",
      body: JSON.stringify(newObservation),
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((error) => Promise.reject(error));
      })
      .then(() => {
        this.resetFields(newObservation);
        this.props.history.push("/observations/user");
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
  };

  resetFields = (newFields) => {
    this.setState({
      id: newFields.id || "",
      title: newFields.title || "",
      content: newFields.content || "",
      modified: newFields.modified || "",
    });
  };

  handleClickCancel = () => {
    this.props.history.push("/observations/user");
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  setLat = (lat) => {
    this.setState({
      lat: lat,
    });
  };

  setLng = (lng) => {
    this.setState({
      lng: lng,
    });
  };

  render() {
    const {
      species,
      type,
      description,
      date,
      time,
      lat,
      lng,
      error,
    } = this.state;
    return (
      <div className="EditObservation">
        <h2>Edit Observation</h2>
        <div role="alert">
          {error && <p className="EditObservation-error">{error}</p>}
        </div>
        <form className="EditObservation-form" onSubmit={this.handleSubmit}>
          <label htmlFor="species">Species seen:</label>
          <input
            type="text"
            name="species"
            onChange={(e) => this.handleChange(e)}
            defaultValue={species}
          ></input>
          <label htmlFor="type">Type of species:</label>
          <select id="type" name="type" onChange={(e) => this.handleChange(e)}>
            <option defaultValue={type}>{type}</option>
            <option value="Mammal">Mammal</option>
            <option value="Bird">Bird</option>
            <option value="Arthropod">Arthropod</option>
            <option value="Amphibian">Amphibian</option>
            <option value="Reptile">Reptile</option>
            <option value="Fish">Fish</option>
          </select>
          <label htmlFor="description">
            Description (be as detailed as possible!):
          </label>
          <textarea
            id="description"
            name="description"
            className="AddObservation-textarea"
            defaultValue={description}
            onChange={(e) => this.handleChange(e)}
          ></textarea>
          <label htmlFor="date">Date seen (MM/DD/YYYY):</label>
          <input
            type="text"
            id="date"
            name="date"
            onChange={(e) => this.handleChange(e)}
            defaultValue={date}
          ></input>
          <label htmlFor="date">Time seen (approximate):</label>
          <input
            type="text"
            id="time"
            name="time"
            onChange={(e) => this.handleChange(e)}
            defaultValue={time}
          ></input>
          <select id="ampm" name="ampm" onChange={(e) => this.handleChange(e)}>
            <option>am</option>
            <option>pm</option>
          </select>
          <div className="EditObservation-location-label">
            <label htmlFor="location">
              Location (drag and drop the marker):
            </label>
          </div>
          <AddObservationMap
            lat={lat}
            lng={lng}
            setLat={this.setLat}
            setLng={this.setLng}
            centralLat={this.props.centralLat}
            centralLng={this.props.centralLng}
          />
          <p className="AddObservation-latlong">
            Latitude: {lat}
            <br></br>
            Longitude: {lng}
          </p>
          <button type="submit">Save</button>
          <button type="button" onClick={this.handleClickCancel}>
            Cancel
          </button>{" "}
        </form>
      </div>
    );
  }
}

export default EditObservation;
