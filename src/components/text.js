import React, { Component } from "react";

class TextBox extends Component {
  state = {
    text: this.props.value
  };

  handleChange = e => {
    this.setState({
      text: value
    });
  };

  render() {
    let { locked } = this.props;
    let { text } = this.state;
    console.log(text);
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
      <div className="input">
        {input}
      </div>
    );
  }
}

export default TextBox;
