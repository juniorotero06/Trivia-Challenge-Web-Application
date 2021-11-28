import "./App.css";
import React from "react";
import WelcomePage from "./pages/welcome";
import SecondPage from "./pages/secondPage";
import ThirdPage from "./pages/thirdPage";
import Error404 from "./pages/error";
import { Route, Switch } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/second-page" component={SecondPage} />
          <Route exact path="/third-page" component={ThirdPage} />
          <Route exact path="/" component={WelcomePage} />
          <Route path="*" component={Error404} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
