import "./Dragon.scss";
import DragonAvatar from "../DragonAvatar/DragonAvatar";
import { Component } from "react";
import { connect } from "react-redux";
import fetchNewDragon from "./state/Dragon.actions";

class Dragon extends Component {
  componentDidMount() {
    this.props.fetchNewDragon();
  }

  render() {
    return (
      <div className="Dragon">
        <DragonAvatar dragon={this.props.dragon} />
        <button
          className="Dragon-button"
          onClick={this.props.fetchNewDragon}
        >
          Create new dragon
        </button>
      </div>
    );
  }
}

// connect returns a function
export default connect(({ dragon }) => ({ dragon }), {
  fetchNewDragon,
})(Dragon);
