import {Link} from 'react-router-dom';

function Home(){
    return (
        <div className="container mx-auto">
            <div className="flex md:flex-row flex-col-reverse">
                <div className="flex items-center justify-center sm:h-screen h-1/2 sm:w-1/2 w-full">
                    <div className="section">
                        <span className="dot"></span>
                        <div className="mb-2">Hi, I'm Aritra Mondal.</div>
                        <div className="sm:text-8xl text-5xl font-bold space-y-4 mt-auto">
                            <div>Developer. </div>
                            <div>Designer. </div>
                            <div>Gamer. </div>
                        </div>
                        <div className="mt-12 ml-2 flex sm:space-x-14 space-x-8 flex-row text-2xl sm:text-3xl mb-auto">
                            <Link to="mailto:1806290@kiit.ac.in"><i className="fas fa-envelope"></i></Link>
                            <Link to="https://twitter.com/aritramondal199"><i className="fab fa-twitter"></i></Link>
                            <Link to="https://www.instagram.com/__aritra_mondal__/"><i className="fab fa-instagram"></i></Link>
                            <Link to="https://www.linkedin.com/in/aritra1999/"><i className="fab fa-linkedin"></i></Link>
                            <Link to="https://www.youtube.com/channel/UCaOZb2OH84nCezEt9gnKy-Q"><i className="fab fa-youtube"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/2 sm:p-0 sm:mt-auto sm:mb-auto mt-10 p-10 w-full">
                    <img src="images/me2.png" className="w-full" style={{ borderRadius: "50px 50px 0 50px" }} />
                </div>
            </div>
        </div>
    );

}

export default Home;