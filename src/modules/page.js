import React,{Component} from "react";
import TextField from "./text-field.js";
import Panel from "./panel.js";

class Page extends Component{
  constructor(props){
    super(props);
    this.state={
      elements:props.elements
    }
  }

  render(){
    console.log(this.state.elements);
    let elems = this.state.elements.map((item)=>{
      if(item.element==="TextField"){
        console.log(item.value.value);
        return(<TextField key={item.id} value={item.value.value} />)
      }
      else if(item.element==="Panel"){
        return(<Panel key={item.id} title={item.value.value[0]} subtitle={item.value.value[1]} info={item.value.value[2]}/>)
      }
    });
    return(
      <div className="page">
        <div className="page-title">
          <TextField value="NAME" />
        </div>
        <div className="page-subtitle">
          <TextField value="SHORT DESCRIPTION" />
        </div>
        <div className="page-element-group">
          {elems}
        </div>
      </div>
    );
  }
}
export default Page;
