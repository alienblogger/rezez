import React, { Component } from "react";
import Panel from "../components/panel.js";

class Panels extends Component {
  render() {
    let { children } = this.props;
    return (
      <div className="panel-container">
        {children}
      </div>
    );
  }
}

export default Panels;
