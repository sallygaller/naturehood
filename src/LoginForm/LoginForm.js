import React from "react";
import TokenService from "../services/token-service";
import AuthApiService from "../services/auth-api-service";
import "./LoginForm.css";

class LoginForm extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  state = {
    error: null,
  };

  handleSubmitJwtAuth = (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    AuthApiService.postLogin({
      email: email.value,
      password: password.value,
    })
      .then((res) => {
        email.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess(res.lat, res.lng);
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        <form
          className="LoginForm"
          onSubmit={(e) => this.handleSubmitJwtAuth(e)}
        >
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <label htmlFor="LoginForm-email">Email address </label>
          <input
            type="text"
            required
            name="email"
            id="email"
            defaultValue="clare.raccoon@madeup.com"
          ></input>
          <label htmlFor="LoginForm-password">Password</label>
          <input
            required
            name="password"
            type="password"
            id="password"
            defaultValue="Secret12345!"
          ></input>
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
