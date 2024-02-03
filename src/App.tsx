import {Header} from "./components/header"
import {Intro} from "./components/intro" 
import {About} from "./components/about"  
import {Projects} from "./components/projects"  
import {Skills} from "./components/Skills"

function App() {
  

  return (
    <> 
    <Header/> 
    <Intro/> 
    <About/> 
    <div className="md:flex md:flex-row md:justify-evenly">
    <Projects/> 
    <Skills/>
    </div>
    </>
  )
}

export default App
