import React from "react";

class TextField extends React.Component{
  constructor(props){
      super(props);
      this.state={
        value:props.value
      }
  }
  handleChange = (e) => {
    this.setState({
      value:e.target.value
    },()=>{
      console.log(this.state.value);
    })
  }

  render(){
    let inputWidth = (this.state.value.length/1.5) + 'em';
    return(
        <input type="text" style={{width:inputWidth}} value={this.state.value} onChange={this.handleChange} />
    );
  }
}

export default TextField
