import { h, render } from "preact";
import Router from "preact-router";
import Home from "./views/home.js";
import Resume from "./views/resume.js";

function App() {
  return (
    <Router>
      <Home path="/" />
      <Resume path="/create/:name" />
    </Router>
  );
}

render(<App />, document.getElementById("app"));
