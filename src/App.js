import "./App.css";
import React from "react";
import WelcomePage from "./pages/welcome";
import SecondPage from "./pages/secondPage";
import ThirdPage from "./pages/thirdPage";
import FourthPage from "./pages/fourthPage";
import Error404 from "./pages/error";
import RouteQuest from "./Routes/routeQuest";
import RouteResults from "./Routes/routeResults";
import { Route, Switch } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/second-page" component={SecondPage} />
          <RouteQuest exact path="/third-page" component={ThirdPage} />
          <RouteResults exact path="/fourth-page" component={FourthPage} />
          <Route exact path="/" component={WelcomePage} />
          <Route path="*" component={Error404} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
