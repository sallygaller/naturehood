import React from "react";
import { API_TOKEN_GOOGLE } from "../config";
import AuthApiService from "../services/auth-api-service";

class RegistrationForm extends React.Component {
  state = { error: null, isFilledIn: false, lat: null, lng: null };

  handleRegistrationSuccess = (user) => {
    const { history } = this.props;
    history.push("/mynaturehood");
  };

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
        console.log(responseData);
        console.log(responseData.results[0].geometry.location.lat);
        const lng = responseData.results[0].geometry.location.lng;
        const lat = responseData.results[0].geometry.location.lat;
        this.setState({
          lat: lat,
          lng: lng,
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.error({ error });
      });

    this.setState({
      error: null,
    });

    AuthApiService.postUser({
      fullname: fullname.value,
      email: email.value,
      password: password.value,
      zipcode: zipcode.value,
      lat: this.state.lat,
      lng: this.state.lng,
    })
      .then((user) => {
        fullname.value = "";
        email.value = "";
        password.value = "";
        zipcode.value = "";
        this.onRegistrationSuccess();
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
          <input type="zipcode" name="zipcode" id="zipcode" />
        </div>
        {/* <button type="submit" disabled={!isFilledIn}> */}
        <button type="submit">Sign Up!</button>
        <button onClick={() => this.handleOnClick} type="submit">
          Test
        </button>
      </form>
    );
  }
}

export default RegistrationForm;
