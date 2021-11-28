import React, { useState } from "react";
import logo from "../logo.png";
import validate from "../Components/validate";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";

export default function SecondPage() {
  let history = useHistory();
  const [input, setInput] = useState({
    name: "",
  });
  const [error, setError] = useState({});
  const handleInputChange = function (e) {
    var objError = validate({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(objError);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const name = e.target.idName.value;
    console.log(name);
    history.push("/third-page");
  };

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>
            Porfavor, introduzca tu nombre para continuar:
          </Form.Label>
          <Form.Control
            className={error.name}
            type="text"
            name="name"
            id="idName"
            placeholder="Enter Name"
            onChange={handleInputChange}
            value={input.name}
          />
          <Form.Text className="text-muted">
            {error.name && <h6>{error.name}</h6>}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          ¡VAMOS!
        </Button>
      </Form>
    </div>
  );
}
