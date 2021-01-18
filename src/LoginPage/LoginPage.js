import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import "./LoginPage.css";

class LoginPage extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    // const { location, history } = this.props;
    // const destination = (location.state || {}).from || "/";
    this.props.history.push("/mynaturehood");
  };

  render() {
    return (
      <div className="LoginPage">
        <h2>Welcome Back!</h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </div>
    );
  }
}

export default LoginPage;
