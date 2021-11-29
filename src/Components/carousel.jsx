import React from "react";

export function ControlledCarousel(props) {
  return (
    <div className="carousel-item active">
      <p className="d-block w-50 h4">Categoria: {props.category}</p>
      <p className="d-block w-50 h4">Dificultad: {props.difficulty}</p>
      <span className="d-block w-50 h2 mt-3">{props.question}</span>
    </div>
  );
}
