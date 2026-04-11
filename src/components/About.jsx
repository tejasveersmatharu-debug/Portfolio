import jsLogo from "../images/JavaScript-logo.png";
import htmlLogo from "../images/html.png";
import cssLogo from "../images/css.png";
import reactLogo from "../images/react.png";
import dockerLogo from "../images/docker.png";
import gitLogo from "../images/git.png";
import reduxLogo from "../images/reduxx.png";
import routerLogo from "../images/router.png";

const About = () => {
  return (
    <div id="about-sec" className="about-section">
      <div className="about-container">
        <div className="about-body">
          <div className="about-header">
            <h1>About Me!</h1>
          </div>
          <p>
            I'm Tejasveer Singh, and i am currently studying chemical
            engineering in first year at IIT-BHU. I am exxtremely passionate
            about Frontend Developement, and love to create! I also love solving
            real life challenges, Currently exploring deep learning through and
            writing a research paper in medical imaging.
          </p>
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
