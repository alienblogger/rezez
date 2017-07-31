import React, { Component } from "react";
import Page from "../containers/page.js";

class Resume extends Component {
  render() {
    let { name } = this.props;
    document.title = name + "-Rezez.pdf";
    console.log(name);
    return (
      <div className="resume">
        <Page name={name} />
      </div>
    );
  }
}

export default Resume;
