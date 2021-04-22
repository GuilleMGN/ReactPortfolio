import React, { Component } from "react";
import Projects from "../projects.json";
import ProjectCard from "../components/ProjectCard";

class Portfolio extends Component {
    state = {
        projects: Projects
    }

    render() {
        return (
            <main className="container">
                <section className="row" id="portfolio">
                    <div className="col-md-12 col-lg-12">
                        <article className="block">
                            <h1 className="block-header"><i className="far fa-images"></i> Portfolio</h1>
                            <hr />
                            <h2 className="block-header">Check out my best projects: </h2>
                            <div className="row">
                                {this.state.projects.map(project => {
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
                                })}
                            </div>
                        </article>
                    </div>
                </section>
            </main>
        );
    }
}

export default Portfolio;