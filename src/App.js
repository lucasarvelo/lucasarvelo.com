import React from "react";
import { Route, Switch } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import Projects from "./views/Projects/Projects";
import Contact from "./views/Contact/Contact";
import "./App.scss";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 150, beforeChildren: true },
  exit: { opacity: 0 }
});

const App = () => (
  <Route
    render={({ location }) => (
      <div className="container-fluid p-0">
        <Navbar />
        <PoseGroup>
          <RouteContainer key={location.pathname}>
            <Switch location={location}>
              <Route exact path="/" component={Home} key="home" />
              <Route path="/projects" component={Projects} key="projects" />
              <Route path="/contact" component={Contact} key="contact" />
            </Switch>
          </RouteContainer>
        </PoseGroup>
      </div>
    )}
  />
);

export default App;
