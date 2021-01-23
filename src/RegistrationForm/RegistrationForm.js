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
      // lat: null,
      // lng: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, email, password, zipcode } = e.target;

    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=` +
        zipcode.value +
        `&key=${API_TOKEN_GOOGLE}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(console.log(res.status));
        }
        return res.json();
      })
      .then((responseData) => {
        console.log("yay!");
        const newLng = responseData.results[0].geometry.location.lng;
        const newLat = responseData.results[0].geometry.location.lat;
        AuthApiService.postUser({
          fullname: fullname.value,
          email: email.value,
          password: password.value,
          zipcode: zipcode.value,
          lat: newLat,
          lng: newLng,
        });
      })
      .then((user) => {
        this.props.onRegistrationSuccess();
        fullname.value = "";
        email.value = "";
        password.value = "";
        zipcode.value = "";
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div>
          <label htmlFor="full_name">Full name </label>
          <input type="text" name="fullname" id="fullname" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <label htmlFor="zip">Zip code </label>
          <input type="text" name="zipcode" id="zipcode" />
        </div>
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegistrationForm;
