import React from "react";

export function ControlledCarousel(props) {
  return (
    <div className="carousel-item active">
      <p className="d-block w-50 h4">Categoria: {props.category}</p>
      <p className="d-block w-50 h4">Dificultad: {props.difficulty}</p>
      <span className="d-block w-50 h2 mt-3">{props.question}</span>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          True
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="option2"
        />
        <label className="form-check-label" htmlFor="inlineRadio2">
          False
        </label>
      </div>
    </div>
  );
}
