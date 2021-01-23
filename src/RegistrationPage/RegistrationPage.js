import React from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import "./RegistrationPage.css";

class LoginPage extends React.Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = (user) => {
    const { history } = this.props;
    history.push("/mynaturehood");
  };

  render() {
    return (
      <div className="RegistrationPage">
        <h2>Welcome!</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </div>
    );
  }
}

export default LoginPage;
