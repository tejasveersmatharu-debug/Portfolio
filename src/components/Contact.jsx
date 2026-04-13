import githubLogo from "../images/github.png";
import ld from "../images/ld.png";
import x from "../images/x.png";
import { motion } from "motion/react";
import cfLogo from "../images/cf.png";

const Contact = () => {
  return (
    <div id="contact-sec" className="contact-page">
      <div className="contact-left">
        <div className="heading contact-heading">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get in Touch!
          </motion.h1>
        </div>
        <div className="content-left">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Got a project in mind, or just want to say hi? I'd love to hear from
            you — drop me a mail and I'll get back as soon as I can.
          </motion.p>
        </div>
      </div>
      <div className="contact-right">
        <div className="email">
          <p>Email me at: tejasveersmatharu@gmail.com</p>
          <div className="email-button">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="mailto:tejasveersmatharu@gmail.com">
                <button className="btn_email">Email Me</button>
              </a>
            </motion.div>
          </div>
        </div>
        <div className="other-links">
          <h4>Other links</h4>
          <motion.ul
            className="contact-links"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }} // or true if you want only once
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.li
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {" "}
              <a
                href="https://github.com/tejasveersmatharu-debug"
                target="_blank"
              >
                <img src={githubLogo} className="logo" />
                <p>GitHub</p>
              </a>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <a
                href="https://www.linkedin.com/in/tejasveer-singh-matharu/"
                target="_blank"
              >
                <img src={ld} className="logo" />
                <p>LinkedIn</p>
              </a>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <a href="https://x.com/TejasveerS46645" target="_blank">
                <img src={x} className="logo" />
                <p>X</p>
              </a>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <a
                href="https://codeforces.com/profile/HotSauceHacker"
                target="_blank"
              >
                <img src={cfLogo} className="logo" />
                <p>CodeForces</p>
              </a>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};
export default Contact;
