import React, { Component } from "react";
import { render } from "react-dom";

import OptionBar from "./modules/option-bar.js";
import Page from "./modules/page.js";

class App extends Component {
  constructor(){
    super();
    this.state={
      pageElements:[]
    }
  }

  addElement = (element, value) => {
    let elems = this.state.pageElements;
    elems.push({
      id:this.state.pageElements.length,
      element:element,
      value:value
    });

    this.setState({
      pageElements:elems
    },()=>{
      console.log(this.state.pageElements);
    });
  }


  render() {
    return (
      <div id="app">
        <OptionBar addElement={this.addElement}/>
        <Page elements={this.state.pageElements}/>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
