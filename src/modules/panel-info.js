import React from "react";
import Button from "./button.js";

class PanelInfo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title:props.title,
      subtitle:props.subtitle
    }
  }

  handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]:value
    })
  }

  render(){
    let subtitleWidth = (this.state.subtitle.length/2) + 'em';
    let titleWidth = (this.state.title.length/2) + 'em';
    return(
      <div className="panel-info">
        <input className="md-input" style={{width:titleWidth}} name="title" value={this.state.title} onChange={this.handleChange}/>
        <input className="sm-input" style={{width:subtitleWidth}} name="subtitle" value={this.state.subtitle} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default PanelInfo;
