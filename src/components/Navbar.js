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
                    <div className="space-y-12 sm:space-y-8 font-bold lg:text-5xl md:text-4xl text-3xl">
                        <Link className="block" to="/">Home</Link>
                        <Link className="block" to="/projects">Projects</Link>
                        <Link className="block" to="/articles">Articles</Link>
                        <Link className="block" to="/about">About</Link>
                        <Link className="block" to="/resume">Resume</Link>
                    </div>
                    <div className="flex space-x-8 flex-row lg:text-2xl md:text-2xl sm:text-xl">
                        <a target="_blank" href="mailto:1806290@kiit.ac.in"><i className="fas fa-envelope"></i></a>
                        <a target="_blank" href="https://twitter.com/aritramondal199"><i className="fab fa-twitter"></i></a>
                        <a target="_blank" href="https://www.instagram.com/__aritra_mondal__/"><i className="fab fa-instagram"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/in/aritra1999/"><i className="fab fa-linkedin"></i></a>
                        <a target="_blank" href="https://www.youtube.com/channel/UCaOZb2OH84nCezEt9gnKy-Q"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;