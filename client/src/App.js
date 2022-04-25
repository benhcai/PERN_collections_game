import "./App.css";
import Home from "./components/Home/Home";
import AuthForm from "./components/AuthForm/AuthForm";
import { connect } from "react-redux";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App--title">Dragon Collections</h1>
        {this.props.account.loggedIn ? <Home /> : <AuthForm />}
      </div>
    );
  }
}

export default connect(({ account }) => ({ account }))(App);
