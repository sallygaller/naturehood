import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
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

export default class MainMap extends React.Component {
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
    return (
      <div>
        <h1>Hi!</h1>
      </div>
    );
    // const observations = this.props.observations;
    // return (
    //   <div className="MainMap" id="map">
    //     <LoadScript googleMapsApiKey={API_KEY}>
    //     <GoogleMap
    //       google={this.props.google}
    //       mapContainerStyle={containerStyle}
    //       center={center}
    //       zoom={12}
    //     >
    //       {observations.map((observation) => (
    //         <Marker
    //           key={observation.id}
    //           position={{ lat: observation.lat, lng: observation.lng }}
    //           averageCenter={true}
    //           onClick={(e) => this.handleMarkerClick(observation, e)}
    //         />
    //       ))}
    //       {this.state.showingInfoWindow && (
    //         <InfoWindow
    //           marker={this.state.activeMarker}
    //           visible={this.state.showingInfoWindow}
    //           onCloseClick={(e) => this.handleCloseClick(e)}
    //           position={this.state.selectedObservationPosition}
    //         >
    //           <div>
    //             <p>
    //               {this.state.selectedObservation.species} seen{" "}
    //               {this.state.selectedObservation.date} at{" "}
    //               {this.state.selectedObservation.time}{" "}
    //               {this.state.selectedObservation.ampm}
    //             </p>
    //           </div>
    //         </InfoWindow>
    //       )}
    //     </GoogleMap>
    //       </LoadScript>
    //     </div>
    //   );
  }
}
