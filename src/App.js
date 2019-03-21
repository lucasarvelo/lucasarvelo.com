import React from "react";
import { Route, Switch } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import "./App.css";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

const App = () => (
  <Route
    render={({ location }) => (
      <div>
        <Navbar />
        <PoseGroup>
          <RouteContainer key={location.pathname}>
            <Switch location={location}>
              <Route exact path="/" component={Home} key="home" />
              <Route path="/about" component={About} key="about" />
              <Route path="/contact" component={Contact} key="contact" />
            </Switch>
          </RouteContainer>
        </PoseGroup>
      </div>
    )}
  />
);

export default App;
