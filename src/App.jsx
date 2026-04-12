import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import Footer from "./components/Footer";
import CurvedLines from "./components/CurvedLines";

function App() {
  const width = window.innerWidth;
  return (
    <>
      <CurvedLines />
      <div style={{ position: "relative", zIndex: 1 }}></div>
      {width > 700 ? <CursorGlow /> : null}
      <Header />
      <Body />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
