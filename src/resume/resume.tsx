import './resume.css'
import imageProfiler from '../assets/RESUME-IMAGE.png'

const resume = () => {

    const titleResume = "<RESUME/>"

    return (
        <div>
            <div className="resume-container">
                <div>
                    <img className="image-profiler" src={imageProfiler} alt="imagemProfiler" />
                </div>
                <div className='text-box'>
                    <p className='resumePort'>{titleResume}</p>
                    <p className="text-resume">
                        Hey there! I'm <b>Sophia</b>, a passionate front-end developer with a knack for crafting immersive user experiences.<br></br><br></br>

                        Currently pursuing my degree in <b>Computer Science at the Massachusetts Institute of Technology</b> (MIT), I thrive on the intersection of creativity and technology.<br></br><br></br>

                        With <b>three years of hands-on experience in the industr</b>y, I've honed my skills in turning design concepts into sleek, responsive websites and applications.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default resume