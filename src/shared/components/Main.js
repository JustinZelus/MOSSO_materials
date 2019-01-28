import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "../sass/style.scss";
import Home from "./Home";
import routes from "../routes";
import ScrollToTopRoute from "./ScrollToTopRoute";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <main>
        <Switch>
          {/* <Route exact path="/" component={() => <Home />} /> */}
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </main>
    );
  }
}

export default Main;
