import React from "react";
import { render } from "react-dom";
import Home from "./views/home.js";
import Resume from "./views/resume.js";

class App extends React.Component {
  state = {
    view: "home",
    name: ""
  };

  route = (view, name) => {
    this.setState({
      view: view,
      name: name
    });
  };

  render() {
    let { view, name } = this.state;
    let renderer =
      view === "resume" ? <Resume name={name} /> : <Home route={this.route} />;
    return (
      <div style={{ width: "100%", height: "100%" }}>
        {renderer}
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
