import "./projects.scss";
import projects from "../../assets/projects";

function Projects() {
    return (
        <div className="projects">
            {projects.map((project) => {
                return (
                    <div className="project" key={project.id}>
                        <h2>{project.name}</h2>
                        <div className="project__img">
                            <img src={project.img} alt="" />
                        </div>
                        <div className="project__desc">
                            <p>{project.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Projects;
