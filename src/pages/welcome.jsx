import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div>
      <span className="h1">!Bienvenidos a Trivia Challenge!</span>
      <p className="h3">
        Vas a responder 10 preguntas de Verdadero o Falso ¿Podras obtener 100%?
      </p>
      <Link to="/second-page">
        <Button variant="primary">EMPEZAR</Button>
      </Link>
    </div>
  );
}
