import React from "react";
import { connect } from "react-redux";
import { retryQuest } from "../redux/actions";
import { Link } from "react-router-dom";

function FourthPage(props) {
  return (
    <div>
      <p className="h1">El total de preguntas aprobadas fue {props.num}/10 </p>
      <Link to="/second-page">
        <button
          type="button"
          className="btn btn-success mt-3"
          onClick={() => props.retryQuest()}
        >
          ¿Quieres jugar de nuevo?
        </button>
      </Link>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    num: state.numResults,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    retryQuest: () => dispatch(retryQuest()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FourthPage);
