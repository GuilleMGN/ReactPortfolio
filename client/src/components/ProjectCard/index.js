import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  console.log(props.png);
  let img = props.png;
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <h4 className="block-header project-title">{props.title}</h4>
      <img 
        className="img-fluid port-image help" 
        src={img} 
        alt={props.title} 
        onMouseEnter={img = props.gif}
        onMouseLeave={img = props.png}
      />
      <br />
      <span className="block-header">Link: </span>
      <a href={props.github} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      <br />
      <span className="block-header">Link: </span>
      <a href={props.application} target="_blank" rel="noopener noreferrer">Live Application</a>
      <hr />
    </div>
  )
}

export default ProjectCard;