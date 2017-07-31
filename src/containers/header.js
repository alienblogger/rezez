import { h, Component } from "preact";
import TextBox from "../components/text.js";

class Header extends Component {
  render({ label }, {}) {
    return (
      <div className="header">
        <div className="header-title">
          <h1>
            {label}
          </h1>
          <div id="short-desc">
            <TextBox value="Short Description" size="sm" />
          </div>
        </div>
        <div className="header-body">
          <TextBox value="Email" size="md" locked="false" />
          <TextBox value="Phone Number" size="md" locked="false" />
        </div>
      </div>
    );
  }
}

export default Header;
