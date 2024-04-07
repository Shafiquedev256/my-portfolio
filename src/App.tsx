import { Header } from "./components/header";
import { Intro } from "./components/intro";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <div className='h-fit flex flex-col space-y-6 p-3'>
        <About />
        <Skills />
      </div>

      <Projects />
    </>
  );
}

export default App;
