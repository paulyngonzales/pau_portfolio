import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Identity from "./components/Identity";
import Contact from "./components/Contact";
import './App.css'



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About /> 
      <Process />
      <Projects />
      <Identity />
      <Contact />
    </>
  );
}

export default App;