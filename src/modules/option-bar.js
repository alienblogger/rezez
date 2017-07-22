import React from "react";
import Button from "./button.js";
import TextField from "./text-field.js";
import ResumeOptions from "./resume-options.js";

class OptionBar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      options:false
    }
  }

  printFunction = () => {
    window.print();
  }

  toggleState = () => {
    this.setState({
      options:!this.state.options
    })
  }

  render(){
    let buttons=this.state.options?<ResumeOptions addElement={this.props.addElement}/>:null;
    return (
      <div className="option-bar">
        <Button styling="fa fa-plus" onClick={this.toggleState} />
        <Button styling="fa fa-print" onClick={this.printFunction} />
        {buttons}
      </div>
    );
  }
}

export default OptionBar;
