import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Skills from "./components/Skills.jsx/Skills";
import Proyectos from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <div className="bg-background">
        <Nav />
        <Home />
        <About />
        <Skills />
        <Proyectos />
      </div>
    </div>
  );
}

export default App;
