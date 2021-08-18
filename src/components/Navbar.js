import {Link} from 'react-router-dom';
import '../assets/css/navbar.css';

function Navbar(){
    return (
        <nav role="navigation">
            <div id="menuToggle">
                
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>


                <div id="menu" className="grid place-content-between">
                    <div className="space-y-8 sm:space-y-16 font-bold lg:text-6xl md:text-4xl text-3xl">
                        <Link className="block" to="/">Home</Link>
                        <Link className="block" to="/projects">Projects</Link>
                        <Link className="block" to="/articles">Articles</Link>
                        <Link className="block" to="/about">About</Link>
                        <a className="block" href="resume/Aritra Mondal - Resume.pdf" target="_blank">Resume</a>
                    </div>
                    <div className="flex space-x-8 flex-row text-2xl sm:text-2xl">
                        <Link to="mailto:1806290@kiit.ac.in"><i className="fas fa-envelope"></i></Link>
                        <Link to="https://twitter.com/aritramondal199"><i className="fab fa-twitter"></i></Link>
                        <Link to="https://www.instagram.com/__aritra_mondal__/"><i className="fab fa-instagram"></i></Link>
                        <Link to="https://www.linkedin.com/in/aritra1999/"><i className="fab fa-linkedin"></i></Link>
                        <Link to="https://www.youtube.com/channel/UCaOZb2OH84nCezEt9gnKy-Q"><i className="fab fa-youtube"></i></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;