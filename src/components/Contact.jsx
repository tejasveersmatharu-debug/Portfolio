import githubLogo from "../images/github.png";
import ld from "../images/ld.png";
import x from "../images/x.png";
import { motion } from "motion/react";
import cfLogo from "../images/cf.png";

const Contact = () => {
  return (
    <div id="contact-sec" className="contact-page">
      <div className="contact-left">
        <div className="heading">
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
              <img src={githubLogo} className="logo" />
              <p>GitHub</p>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img src={ld} className="logo" />
              <p>LinkedIn</p>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img src={x} className="logo" />
              <p>X</p>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img src={cfLogo} className="logo" />
              <p>CodeForces</p>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};
export default Contact;
