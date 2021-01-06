import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import API_KEY from "../config";
import "./MainMap.css";

const containerStyle = {
  width: "400px",
  height: "400px",
  margin: "0 auto",
};

const center = {
  lat: 45.6008,
  lng: -122.7606,
};

class MainMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedObservation: {},
      selectedObservationPosition: {},
    };
  }

  handleMarkerClick = (observation, marker, e) => {
    this.setState({
      selectedObservation: observation,
      selectedObservationPosition: {
        lat: observation.lat,
        lng: observation.lng,
      },
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  handleCloseClick = (e) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
        selectedObservation: {},
      });
    }
  };

  render() {
    const observations = this.props.observations;
    return (
      <div className="MainMap">
        <LoadScript id="script-loader" googleMapsApiKey={API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          >
            {observations.map((observation) => (
              <Marker
                key={observation.id}
                position={{ lat: observation.lat, lng: observation.lng }}
                averageCenter={true}
                onClick={(e) => this.handleMarkerClick(observation, e)}
              />
            ))}
            {this.state.showingInfoWindow && (
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onCloseClick={(e) => this.handleCloseClick(e)}
                position={this.state.selectedObservationPosition}
              >
                <div>
                  <p>
                    {this.state.selectedObservation.species} seen{" "}
                    {this.state.selectedObservation.date} at{" "}
                    {this.state.selectedObservation.time}{" "}
                    {this.state.selectedObservation.ampm}
                  </p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    );
  }
}

export default MainMap;
