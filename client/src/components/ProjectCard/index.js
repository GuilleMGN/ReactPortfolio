import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img 
        alt={props.title} 
        src={props.png} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.title}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;