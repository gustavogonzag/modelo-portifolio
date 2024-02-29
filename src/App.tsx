import './App.css'
import Background from './background/background.tsx'
import Header from './header/header.tsx'
import Home from './home/home.tsx'
import Portfolio from './portfolio/portfolio.tsx'

function App() {

  return (
    <>
      <Header></Header>
      <Home></Home>
      <Portfolio></Portfolio>
      <Background></Background>
    </>
  )
}

export default App
