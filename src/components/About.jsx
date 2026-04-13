import jsLogo from "../images/JavaScript-logo.png";
import htmlLogo from "../images/html.png";
import cssLogo from "../images/css.png";
import reactLogo from "../images/react.png";
import dockerLogo from "../images/docker.png";
import gitLogo from "../images/git.png";
import reduxLogo from "../images/reduxx.png";
import routerLogo from "../images/router.png";
import { motion } from "motion/react";

const About = () => {
  return (
    <div id="about-sec" className="about-section">
      <div className="about-container">
        <div className="about-body">
          <div className="about-header">
            <h1>About Me!</h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-motion"
          >
            I'm Tejasveer, a Chemical Engineering student at IIT-BHU with a
            serious passion for frontend development. For the past 1.5 years
            I've been building for the web — crafting clean interfaces with
            HTML, CSS, JavaScript and React.
            <br />I love both the design and the code side of things, and I'm
            always pushing to make something look better and feel smoother.
            Outside the web, I'm currently writing a research paper on cancer
            detection using deep learning — because I believe good tech should
            solve real problems. <br />
            <span className="highlight">
              Hardworking, curious, and always building something.
            </span>
          </motion.p>
        </div>
        <div className="about-skills">
          {/* <div className="skills-heading">
            <h2>Skills:</h2>
          </div> */}
          <div className="skills-list">
            <div className="dev-skills-row row">
              <h4>Developer Skills</h4>
              <ul className="dev-skills-ul  skill-list">
                <li>
                  <div className="skill-icon">
                    <img src={htmlLogo} />
                  </div>
                  <p>HTML</p>
                </li>
                <li>
                  <div className="skill-icon">
                    <img src={cssLogo} />
                  </div>
                  <p>CSS</p>
                </li>
                <li>
                  <div className="skill-icon">
                    <img src={jsLogo} />
                  </div>
                  <p>JavaScript</p>
                </li>
                <li>
                  <div className="skill-icon">
                    <img src={reactLogo} />
                  </div>
                  <p>React</p>
                </li>
              </ul>
            </div>
            <div className="ops-skills-row row">
              <h4>Dev-Ops Skills</h4>
              <ul className="dev-skills-ul skill-list">
                <li>
                  <div className="skill-icon">
                    <img src={gitLogo} />
                  </div>
                  <p>Git</p>
                </li>
                <li>
                  <div className="skill-icon">
                    <img src={dockerLogo} />
                  </div>
                  <p>Docker</p>
                </li>
              </ul>
            </div>
            <div className="lib-skills-row row">
              <h4>Libraries Skills</h4>
              <ul className="lib-skills-ul skill-list">
                <li>
                  <div className="skill-icon">
                    <img src={reduxLogo} />
                    <p>Redux</p>
                  </div>
                </li>
                <li>
                  <div className="skill-icon">
                    <img src={routerLogo} />
                    <p>React Router</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
