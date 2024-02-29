import './portfolio.css'
import projectOne from '../assets/PRINT1.png';
import projectTwo from '../assets/PRINT2.png';
import projectThree from '../assets/PRINT3.png';

const portfolio = () => {

 const titlePortfolio = "<MY LASTEST PROJECTS/>"

  return (
    <div>
        <div className="port-container">
            <p className='titlePort'>{titlePortfolio}</p>
            <div className="imagesProjects">
              <img className='image-project' src={projectOne} alt="printprojeto1" />
              <img className='image-project' src={projectTwo} alt="printprojeto1" />
              <img className='image-project' src={projectThree} alt="printprojeto1" />
            </div>
        </div>
    </div>
  )
}

export default portfolio