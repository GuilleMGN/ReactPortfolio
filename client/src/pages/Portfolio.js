import React, { Component } from 'react';
import Projects from "../projects.json";
import ProjectCard from "../components/ProjectCard";


class Portfolio extends Component {
    state = {
        projects: Projects,
        condition: "static"
    }

    gif = () => {
        this.setState({
            condition: "animate"
        })
    }

    render() {
        return (
            <div>
            <h1> Portfolio page </h1>
            { this.state.projects.map(project => {
                return (
                    <ProjectCard 
                        id={project.id}
                        key={project.id}
                        title={project.title}
                        png={project.png}
                        gif={project.gif}
                        github={project.github}
                        application={project.application}
                    />
                )
            }) }

            </div>
        );
    }
}

export default Portfolio;