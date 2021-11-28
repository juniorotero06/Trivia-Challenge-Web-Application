import React, { useEffect } from "react";
import { getQuestions } from "../redux/actions";
import { connect } from "react-redux";
import LoadingComponent from "../Components/loading";

function ThirdPage(props) {
  useEffect(() => {
    props.getQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <span className="h1">Third Page</span>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    questions: state.questions,
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    getQuestions: () => dispatch(getQuestions()),
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(ThirdPage);
