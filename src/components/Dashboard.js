import mainGif from './../Assets/mainGif.gif';
import {
   Link
} from 'react-scroll';
function Dashboard(){
    return (
    <div className="Dashboard" id='dashboard'>
        <nav className="navbar">
           <h1 className="portfolioTitleNavBar">Porfolio</h1>
            <ul>
                <li>
                    <Link className="linkStyle" to="dashboard" spy={true} smooth={true} offset={50} duration={500}>Dashboard</Link>
                </li>
                <li>
                    <Link className="linkStyle" to='skills' spy={true} smooth={true} offset={50} duration={500}>Skills</Link>
                </li>
                <li>
                    <Link className="linkStyle" to='projects' spy={true} smooth={true} offset={50} duration={500}>Projects</Link>
                </li>
                <li>
                    <Link className="linkStyle" to='contact' spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                </li>
            </ul>
            <h1 className='contactmeButton'>Contact Me</h1>
        </nav>
        <div class="paddingDiv">
        <main>
            <div className="mainText">
                <div>
                  <h1>Sathya Srivatsav</h1>
                  <p><span className='highlightColor'>React</span> Developer</p>
                </div>
               <div>
                <img src={mainGif} alt="Desciption"/>
               </div>
            </div>
        </main>
    </div>
    </div>
    );
}

export default Dashboard;