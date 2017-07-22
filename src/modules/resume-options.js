import React from "react";
import Button from "./button.js";

function ResumeOptions(props) {
  return(
    <div>
    <Button styling="fa fa-envelope-open" onClick={()=>{props.addElement("TextField",{value:"Email"})}}/>
    <Button styling="fa fa-phone" onClick={()=>{props.addElement("TextField",{value:"Phone"})}}/>
    <Button styling="fa fa-university" onClick={()=>{props.addElement("Panel",{value:["Education","Institute","Year of Completion"]})}}/>
    <Button styling="fa fa-pie-chart" onClick={()=>{props.addElement("Panel",{value:["Skills","Skill Name","Proficiency: Beginner, Intermediate, Advanced, Master"]})}}/>
    </div>

  );
}

export default ResumeOptions;
