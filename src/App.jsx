import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";

function App() {
  return (
    <>
      <CursorGlow />
      <Header />
      <Body />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;
