import "./AuthForm.css";
import { Component } from "react";
// import { Button, FormGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { signup, login } from "./state/AuthForm.actions";
import FETCH_STATES from "../../helpers/FETCH_STATES";

class AuthForm extends Component {
  state = {
    username: "",
    password: "",
    buttonClicked: false,
    error: "",
  };

  updateUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  updatePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  signup = () => {
    this.setState({ buttonClicked: true });
    const { username, password } = this.state;
    this.props.signup({ username, password });
  };

  login = () => {
    this.setState({ buttonClicked: true });
    const { username, password } = this.state;
    this.props.login({ username, password });
    console.log(this.props);
  };

  error() {
    if (
      this.state.buttonClicked &&
      this.props.account.status === FETCH_STATES.ERROR
    ) {
      return <div>{this.props.account.message}</div>;
    }
  }

  render() {
    return (
      <div className="AuthForm">
        <form className="AuthForm--forms">
          <input
            type="text"
            value={this.state.username}
            placeholder="username"
            onChange={this.updateUsername}
          />
          <input
            type="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.updatePassword}
          />
        </form>
        <div className="AuthForm--buttons">
          <button onClick={this.login}>Log In</button>
          <button onClick={this.signup}>Sign Up</button>
        </div>
        <br />
        {this.error()}
      </div>
    );
  }
}

export default connect(({ account }) => ({ account }), {
  signup,
  login,
})(AuthForm);
