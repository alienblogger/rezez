import React, { Component } from "react";

class TextBox extends Component {
  state = {
    text: this.props.value
  };

  handleChange = e => {
    var value = e.target.value;
    this.setState({
      text
    });
  };
  render() {
    let { locked } = this.props;
    let { text } = this.state;
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
              onChange={this.handleChange}
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
