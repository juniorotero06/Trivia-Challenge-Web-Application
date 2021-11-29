import React, { useState } from "react";
import LoadingComponent from "../Components/loading";
import { numResults } from "../redux/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function ThirdPage(props) {
  let history = useHistory();
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState(0);
  let now = index * 10;
  let chekedArray = [];
  function radioCheked(e) {
    e.preventDefault();
    if (index < props.questions.length) {
      setIndex(index + 1);
      var cbChecked = document.querySelector(
        '[name="inlineRadioOptions"]:checked'
      );
      if (cbChecked != null) {
        chekedArray.push(cbChecked.value);
      }
    }
    if (chekedArray[0] === props.questions[index].correct_answer) {
      setResult(result + 1);
    }
    console.log("check: ", chekedArray);
  }
  function finishRadioCheked(e) {
    e.preventDefault();
    if (index < props.questions.length) {
      setIndex(index + 1);
      var cbChecked = document.querySelector(
        '[name="inlineRadioOptions"]:checked'
      );
      if (cbChecked != null) {
        chekedArray.push(cbChecked.value);
      }
    }
    if (chekedArray[0] === props.questions[index].correct_answer) {
      setResult(result + 1);
    }
    props.numResults(result);
    history.push("/fourth-page");
    console.log("check: ", chekedArray);
  }
  return (
    <div>
      <form>
        {/*/////////// Carrusel ///////////////*/}
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
              props.questions.map((p, i) => {
                return (
                  <div
                    key={i}
                    className={
                      i === index ? "carousel-item active" : "carousel-item"
                    }
                  >
                    <div>
                      <p className="d-block h5 mt-3">Categoria: {p.category}</p>
                      <p className="d-block h5 mt-3">
                        Dificultad: {p.difficulty}
                      </p>
                      <p className="d-block h4 mt-3">{p.question}</p>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id={`inlineRadio${index}`}
                        value="True"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        True
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id={`inlineRadio${index + 2}`}
                        value="False"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        False
                      </label>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>no hay preguntas</h1>
            )}
          </div>
          {/*/////////// Boton de prev ///////////////*/}
          <button
            className="carousel-control-prev"
            disabled={index === 0}
            type="submit"
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
          {/*/////////// Boton de next ///////////////*/}
          <button
            className="carousel-control-next"
            disabled={index === 9}
            type="submit"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
            onClick={radioCheked}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
          {/*/////////// pregunta # ///////////////*/}
          <p className="h4 mt-3">Pregunta Numero #{index + 1}</p>
        </div>
        {/*//////////////Btn Finalizar ///////////*/}
        <div>
          {index === 9 ? (
            <button
              type="button"
              className="btn btn-success mt-4 mb-4"
              onClick={finishRadioCheked}
            >
              Finalizar
            </button>
          ) : null}
        </div>
        {/*/////////// Progress Bar ///////////////*/}
        <div className="mt-3">
          <div className="progress">
            {index > 6 ? (
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
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    questions: state.questions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    numResults: (num) => dispatch(numResults(num)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThirdPage);
