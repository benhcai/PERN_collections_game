import "./Home.css";
import { Component } from "react";
import Generation from "../Generation/Generation";
import Dragon from "../Dragon/Dragon";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Generation />
        <Dragon />
      </div>
    );
  }
}

export default Home;
