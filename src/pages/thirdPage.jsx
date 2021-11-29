import React, { useEffect, useState } from "react";
import { getQuestions } from "../redux/actions";
import { connect } from "react-redux";
import LoadingComponent from "../Components/loading";
import { ControlledCarousel } from "../Components/carousel";
import { Link } from "react-router-dom";

function ThirdPage(props) {
  const [index, setIndex] = useState(0);
  let now = index * 10;
  useEffect(() => {
    props.getQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div className="carousel-inner">
          {props.loading ? (
            <div className="mt-3">
              <LoadingComponent />
            </div>
          ) : props.questions.length > 0 ? (
            <ControlledCarousel
              category={props.questions[index].category}
              difficulty={props.questions[index].difficulty}
              question={props.questions[index].question}
              correctAnswer={props.questions[index].correct_answer}
              incorrectAnswers={props.questions[index].incorrect_answers[0]}
            />
          ) : null}
        </div>
        <button
          className="carousel-control-prev"
          disabled={index === 0}
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
            }
          }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          disabled={index === 9}
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
          onClick={() => {
            if (index < props.questions.length) {
              setIndex(index + 1);
            }
          }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <p className="h4 mt-3">Pregunta Numero #{index + 1}</p>
        {index === 9 ? (
          <Link to="/fourth-page">
            <button type="button" className="btn btn-success">
              Finalizar
            </button>
          </Link>
        ) : null}
      </div>
      <div className="mt-3">
        <div className="progress">
          {index > 7 ? (
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
              role="progressbar"
              aria-valuenow={now}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${now}%` }}
            ></div>
          ) : (
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow={now}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${now}%` }}
            ></div>
          )}
        </div>
      </div>
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
