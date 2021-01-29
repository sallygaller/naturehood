import React from "react";
import { API_TOKEN_GOOGLE } from "../config";
import AuthApiService from "../services/auth-api-service";
import "./RegistrationForm.css";

class RegistrationForm extends React.Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      lat: null,
      lng: null,
      zipcode: 0,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, email, password, zipcode } = e.target;
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=` +
        this.state.zipcode +
        `&key=${API_TOKEN_GOOGLE}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(console.log(res.status));
        }
        return res.json();
      })
      .then((responseData) => {
        const newLng = responseData.results[0].geometry.location.lng;
        const newLat = responseData.results[0].geometry.location.lat;
        AuthApiService.postUser({
          fullname: fullname.value,
          email: email.value,
          password: password.value,
          zipcode: zipcode.value,
          lat: newLat,
          lng: newLng,
        })
          .then((user) => {
            fullname.value = "";
            email.value = "";
            password.value = "";
            zipcode.value = "";
            this.props.onRegistrationSuccess();
          })
          .catch((res) => {
            this.setState({
              error: res.error,
            });
          });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div>
          <label htmlFor="full_name">Full name </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="John Hummingbird"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="johnhummingbird@madeup.com"
          />
        </div>
        <div className="RegistrationForm-password">
          <label htmlFor="password">Password</label>
          <p>
            (must be longer than 8 characters and contain 1 upper case, lower
            case, number and special character)
          </p>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <label htmlFor="zip">Zip code </label>
          <input
            onChange={this.handleZipCodeChange}
            type="text"
            name="zipcode"
            id="zipcode"
            placeholder="97203"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegistrationForm;
