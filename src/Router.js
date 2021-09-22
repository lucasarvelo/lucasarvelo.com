import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const NavbarLinks = [
  { path: "/", text: "Home" },
  { path: "/projects", text: "Projects" },
  { path: "/blog", text: "Blog" },
  { path: "/about", text: "About" },
  { path: "/contact", text: "Contact" },
];

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};
