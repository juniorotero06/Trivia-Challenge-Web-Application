import React from "react";
import logo from "../logo.png";

export default function Error404() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <span className="h1">Error 404</span>
      <p>Not Found</p>
    </div>
  );
}
