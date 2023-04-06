import ProjectCard from "./ProjectCard";

function Projects(){
    return (
    <div className="Projects">
        <div className="paddingDiv">
            <h1>My Works</h1>
            <div className="projectCards">
                <ProjectCard/>
            </div>
        </div>
    </div>
    );
}

export default Projects;