import './header.css'
import logo from '../assets/LOGO-EU-DEV.png'

const header = () => {
    return (
        <div className='header'>
            <img className='Logo' src={logo} alt="logo" />
            <nav className='nav'>
                <a href="/">Home</a>
                <a href="/">Portfolio</a>
                <a href="/">Resume</a>
            </nav>
        </div >
    )
}

export default header