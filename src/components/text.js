import { h, Component } from "preact";
import linkState from "linkstate";

class TextBox extends Component {
  render({ value, size, locked }, { text = value }) {
    let input = null;
    if (locked === "true") {
      input =
        text === null
          ? null
          : <input disabled="true" className="text-box" value={text} />;
    } else {
      input =
        text === null
          ? null
          : <input
              className="text-box"
              value={text}
              onInput={linkState(this, "text")}
            />;
    }
    return (
      <div>
        {input}
      </div>
    );
  }
}

export default TextBox;
