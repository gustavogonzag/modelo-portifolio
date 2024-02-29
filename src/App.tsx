import './App.css'
import Background from './background/background.tsx'
import Footer from './footer/footer.tsx'
import Header from './header/header.tsx'
import Home from './home/home.tsx'
import Portfolio from './portfolio/portfolio.tsx'
import Resume from './resume/resume.tsx'

function App() {

  return (
    <>
      <Header></Header>
      <Home></Home>
      <Portfolio></Portfolio>
      <Resume></Resume>
      <Footer></Footer>
      <Background></Background>
    </>
  )
}

export default App
