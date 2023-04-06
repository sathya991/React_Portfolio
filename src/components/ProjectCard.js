function ProjectCard(props){
    return(
        <div className="cardBody">
            <div className="cardImage">
                <img src={props.img} alt={props.title}/>
                <div className="cardText">
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}
export default ProjectCard;