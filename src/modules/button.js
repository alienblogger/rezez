import React from "react";

function Button(props) {
  let button = props.children ? props.children : props.label;
  return (
    <div className={props.styling + " button"} onClick={props.onClick}>
      {props.label}
    </div>
  );
}

export default Button;
