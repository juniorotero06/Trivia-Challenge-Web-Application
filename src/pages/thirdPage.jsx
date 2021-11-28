import React, { useEffect, useState } from "react";
import { getQuestions } from "../redux/actions";
import { connect } from "react-redux";
import LoadingComponent from "../Components/loading";
import { ControlledCarousel } from "../Components/carousel";

function ThirdPage(props) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    props.getQuestions();
    console.log(props.questions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      id="carouselExampleControlsNoTouching"
      class="carousel slide"
      data-bs-touch="false"
      data-bs-interval="false"
    >
      <div class="carousel-inner">
        {props.loading ? (
          <div className="mt-3">
            <LoadingComponent />
          </div>
        ) : props.questions ? (
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
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
        onClick={() => {
          if (index > 0) {
            setIndex(index - 1);
          }
        }}
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next"
        onClick={() => {
          if (index < 10) {
            setIndex(index + 1);
          }
        }}
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
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
