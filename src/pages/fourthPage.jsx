import React from "react";
import { connect } from "react-redux";
import { retryQuest } from "../redux/actions";
import { Link } from "react-router-dom";

function FourthPage(props) {
  return (
    <div>
      <p className="h1">Fourth Page</p>
      <Link to="/second-page">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => props.retryQuest()}
        >
          ¿Quieres jugar de nuevo?
        </button>
      </Link>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    retryQuest: () => dispatch(retryQuest()),
  };
}

export default connect(mapDispatchToProps)(FourthPage);
