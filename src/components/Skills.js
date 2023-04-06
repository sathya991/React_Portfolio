import extraGif from './../Assets/extraGif.gif';

const myBio = "Hi, I'm G Satya Srivatsav, a React developer with 1 year of experience building web applications. I specialize in developing reusable and scalable components using React, Redux, and TypeScript. My expertise also includes building Mobile Applications using Flutter. I prioritize code quality, maintainability, and testing to ensure robust and bug-free applications. When I'm not coding, I enjoy learning new technologies and staying up-to-date with industry trends. If you're looking for a skilled React developer for your next project, feel free to reach out to me."
function Skills(){
    return (
    <div className="Skills">
        <div className='paddingDiv'>
        <div className='singleLine'>
            <img id='extraGif' src={extraGif} alt="Decoration"/>
            <div className="aboutMe">
            <h1 className="highlightColor">About me</h1>
            <p className="descriptionText">{myBio}</p>
            <h1 className='connectionButton resumeButton'>My Resume</h1>
      </div>
      </div>
        <div className="skillsDiv">
            <h1 className='skillHeading'>My Skill Arsenal</h1>
            <ul className='skillList'>
                <li>
                    HTML
                </li>
                <li>
                    CSS
                </li>
                <li>
                    Java Script
                </li>
                <li>
                    React
                </li>
                <li>
                    Java
                </li>
                <li>
                    Dart
                </li>
                <li>
                    Flutter
                </li>
            </ul>
        </div>
    </div>
    </div>
    );
}

export default Skills;