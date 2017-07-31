import { h, Component } from "preact";
import Panel from "../components/panel.js";

class Panels extends Component {
  render({ children }, {}) {
    return (
      <div className="panel-container">
        {children}
      </div>
    );
  }
}

export default Panels;
