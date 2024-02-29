import './home.css'
import noteImg from '../assets/NOTEBOOK.png'
import iconInstagram from '../assets/instagram (2).png';
import iconLinkedin from '../assets/linkedin.png';
import iconGithub from '../assets/github.png';

const home = () => {
    return (
        <div className="home-container">
            <div className="side-left">
                <div className="text-home">
                    <p>Hi,</p>
                    <p>I am Lorem,</p>
                    <p className='web-text'>Web Developer</p>
                    <span className='info'>Front-end developer | Javascript | React </span>
                </div>
                <div className="icons">
                    <img className='icon' src={iconInstagram} alt="iconeInstagram" />
                    <img className='icon' src={iconLinkedin} alt="iconeLinkedin" />
                    <img className='icon' src={iconGithub} alt="iconeGithub" />
                </div>
                <button className='downloadCV'>DOWNLOAD CV</button>
            </div>

            <div>
                <img className='notebookImg' src={noteImg} alt="notebookImg" />
            </div>
        </div>
    )
}

export default home