import { h, Component } from "preact";
import Page from "../containers/page.js";

class Resume extends Component {
  render({ name }, {}) {
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
