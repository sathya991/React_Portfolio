import mainGif from './../Assets/mainGif.gif';
import {
    NavLink
} from 'react-router-dom';
function Dashboard(){
    return (
    <div className="Dashboard">
        <nav className="navbar">
           <h1 className="portfolioTitleNavBar">Porfolio</h1>
            <ul>
                <li>
                    <NavLink className="linkStyle" to='/dashboard'>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink className="linkStyle" to='/skills'>Skills</NavLink>
                </li>
                <li>
                    <NavLink className="linkStyle" to='/projects'>Projects</NavLink>
                </li>
                <li>
                    <NavLink className="linkStyle" to='/contact'>Contact</NavLink>
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