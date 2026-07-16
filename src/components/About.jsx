import jsLogo from "../images/JavaScript-logo.png";
import htmlLogo from "../images/html.png";
import cssLogo from "../images/css.png";
import reactLogo from "../images/react.png";
import githubLogo from "../images/github.png";
import gitLogo from "../images/git.png";
import reduxLogo from "../images/reduxx.png";
import routerLogo from "../images/router.png";
import mongoLogo from "../images/Mongo.png";
import nodeLogo from "../images/Node.png";
import awsLogo from "../images/aws.png";
import dockerLogo from "../images/docker.png";
import nginxLogo from "../images/nginx.png";
import postmanLogo from "../images/postman.png";
import supabaseLogo from "../images/supabase.png";
import redisLogo from "../images/pngegg.png";
import { motion } from "motion/react";

const frontendSkills = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "Redux", logo: reduxLogo },
  { name: "React Router", logo: routerLogo },
];

const backendSkills = [
  { name: "Node.js", logo: nodeLogo },
  { name: "MongoDB", logo: mongoLogo },
  { name: "Redis", logo: redisLogo },
  { name: "Supabase", logo: supabaseLogo },
];

const devOpsTools = [
  { name: "Git", logo: gitLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "AWS", logo: awsLogo },
  { name: "Docker", logo: dockerLogo },
  { name: "Nginx", logo: nginxLogo },
  { name: "Postman", logo: postmanLogo },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  },
};

const CodeWindow = () => {
  const jsonLines = [
    { type: "brace", content: "{" },
    { type: "field", key: "name", value: '"Tejasveer"', isString: true },
    { type: "field", key: "role", value: '"Full-Stack Developer"', isString: true },
    { type: "field", key: "based_in", value: '"IIT-BHU, India"', isString: true },
    { type: "field", key: "currently", value: '"Researcher @ IIT-BHU"', isString: true },
    { type: "array-start", key: "stack", value: "[" },
    { type: "array-item", value: '"React"' },
    { type: "array-item", value: '"React Native"' },
    { type: "array-item", value: '"Node.js"' },
    { type: "array-item", value: '"AWS"' },
    { type: "array-end", value: "]," },
    { type: "field", key: "passion", value: '"Turning mockups into pixel-perfect realities"', isString: true, last: true },
    { type: "brace", content: "}" },
  ];

  return (
    <motion.div
      className="code-window"
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Title bar */}
      <div className="code-window__titlebar">
        <div className="code-window__dots">
          <span className="code-window__dot code-window__dot--red" />
          <span className="code-window__dot code-window__dot--yellow" />
          <span className="code-window__dot code-window__dot--green" />
        </div>
        <span className="code-window__filename">about.json</span>
        <div className="code-window__dots-spacer" />
      </div>

      {/* Body */}
      <div className="code-window__body">
        <pre className="code-window__pre">
          {jsonLines.map((line, i) => {
            if (line.type === "brace") {
              return (
                <div className="code-window__line" key={i}>
                  <span className="cw-line-num">{i + 1}</span>
                  <span className="cw-punct">{line.content}</span>
                </div>
              );
            }
            if (line.type === "field") {
              return (
                <div className="code-window__line" key={i}>
                  <span className="cw-line-num">{i + 1}</span>
                  <span className="cw-indent" />
                  <span className="cw-key">"{line.key}"</span>
                  <span className="cw-punct">: </span>
                  <span className="cw-string">{line.value}</span>
                  <span className="cw-punct">{line.last ? "" : ","}</span>
                </div>
              );
            }
            if (line.type === "array-start") {
              return (
                <div className="code-window__line" key={i}>
                  <span className="cw-line-num">{i + 1}</span>
                  <span className="cw-indent" />
                  <span className="cw-key">"{line.key}"</span>
                  <span className="cw-punct">: </span>
                  <span className="cw-punct">{line.value}</span>
                </div>
              );
            }
            if (line.type === "array-item") {
              return (
                <div className="code-window__line" key={i}>
                  <span className="cw-line-num">{i + 1}</span>
                  <span className="cw-indent cw-indent--double" />
                  <span className="cw-string">{line.value}</span>
                  <span className="cw-punct">,</span>
                </div>
              );
            }
            if (line.type === "array-end") {
              return (
                <div className="code-window__line" key={i}>
                  <span className="cw-line-num">{i + 1}</span>
                  <span className="cw-indent" />
                  <span className="cw-punct">{line.value}</span>
                </div>
              );
            }
            return null;
          })}
          <div className="code-window__line">
            <span className="cw-line-num">{jsonLines.length + 1}</span>
            <span className="cw-cursor">|</span>
          </div>
        </pre>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div id="about-sec" className="about-section">
      <div className="about-container">
        <div className="about-body">
          <div className="about-header">
            <h1>About Me!</h1>
          </div>
          <div className="about-body__row">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="about-motion"
            >
              I'm Tejasveer, a Chemical Engineering student at IIT-BHU with a
              serious passion for full-stack development. I've spent the last 1.5
              years building for the web and mobile — from React and React Native
              frontends to Node.js/Express backends deployed on AWS.
              <br />
              I recently interned at OpenCubicles, shipping features on a
              production React Native app and working across the video processing
              pipeline. I love both the design and the code side of things.
              <br />
              Outside of that, I'm currently a Researcher at IIT-BHU, working on a
              deep learning paper for cancer detection — because I believe good
              tech should solve real problems. <br />
              <span className="highlight">
                Hardworking, curious, and always building something.
              </span>
            </motion.p>
            <CodeWindow />
          </div>
        </div>
        <div className="about-skills">
          <div className="skills-list">
            <div className="skills-group-card">
              <h4>Frontend Development</h4>
              <motion.ul 
                className="dev-skills-ul skill-list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {frontendSkills.map((skill) => (
                  <motion.li key={skill.name} variants={itemVariants}>
                    <div className="skill-icon">
                      <img src={skill.logo} alt={skill.name} />
                    </div>
                    <p>{skill.name}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="skills-group-card">
              <h4>Backend & Databases</h4>
              <motion.ul 
                className="dev-skills-ul skill-list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {backendSkills.map((skill) => (
                  <motion.li key={skill.name} variants={itemVariants}>
                    <div className="skill-icon">
                      <img src={skill.logo} alt={skill.name} />
                    </div>
                    <p>{skill.name}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="skills-group-card">
              <h4>DevOps & Tools</h4>
              <motion.ul 
                className="lib-skills-ul skill-list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {devOpsTools.map((skill) => (
                  <motion.li key={skill.name} variants={itemVariants}>
                    <div className="skill-icon">
                      <img src={skill.logo} alt={skill.name} />
                    </div>
                    <p>{skill.name}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
