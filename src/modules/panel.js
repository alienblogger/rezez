import React from "react";
import TextField from "./text-field.js";
import Button from "./button.js";
import PanelInfo from "./panel-info.js";

class Panel extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title:props.title,
      subtitle:props.subtitle,
      info:props.info,
      panels:[]
    };
  }

  addPanel = ()=>{
    let panels = this.state.panels.slice();
    let add = <PanelInfo title={this.state.subtitle} subtitle={this.state.info} />
    panels.push(add);
    this.setState({
      panels:panels
    },()=>{
      console.log(this.state.panels);
    })
  }

  handleChange =(e)=>{
    const name=e.target.name;
    const value = e.target.value;
    this.setState({
      [name]:value
    },console.log(this.state[name]));
  }

render(){
  return(
    <div className="panel">
      <label className="panel-title">{this.state.title}</label>
      <hr />
      <div className="panel-list">
      {this.state.panels}
      </div>

      <Button styling="fa fa-plus" onClick={this.addPanel}/>
    </div>
  );
}
}

export default Panel;
