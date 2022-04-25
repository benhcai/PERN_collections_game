import "./Generation.scss";
import { Component } from "react";
import { connect } from "react-redux";
import fetchGeneration from "./state/Generation.actions";
import fetchNextGeneration from "./fetchNextGeneration";
import FETCH_STATES from "../../helpers/FETCH_STATES";

class Generation extends Component {
  constructor() {
    super();
    this.fetchNextGeneration = fetchNextGeneration.bind(this);
  }

  // Not rendered in the DOM so should be in state:
  timer = null;

  componentDidMount() {
    this.fetchNextGeneration();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    console.log("------------render------------------");
    console.log(this);
    const generation = this.props.generation;
    // if (generation.status === FETCH_STATES.FETCHING) {
    //   return <div>...</div>;
    // }
    if (generation.status === FETCH_STATES.ERROR) {
      return <div>{generation.message}</div>;
    }
    return (
      <div className="Generation">
        <div className="Generation--title">
          <h2 className="Generation--title">GENERATION CREATION</h2>
          <div className="online"></div>
        </div>
        <p className="generation-id">{generation.generationId}</p>
        <p className="generation-id-label">Current Generation</p>
        <p className="experation-time">{generation.expirationTime}</p>
        <p className="generation-id-label">Expiration</p>
        {/* <button className="" onClick={() => this.props.fetchGeneration()}>
          Get current generation
        </button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const generation = state.generation;
  return { generation: generation };
};

export default connect(mapStateToProps, {
  fetchGeneration,
})(Generation);
