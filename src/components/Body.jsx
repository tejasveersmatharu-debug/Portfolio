import "./Projects";
import pic from "../images/pic.jpeg";
import { useRef } from "react";

const Body = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `rotateY(${(x / rect.width) * 20}deg) rotateX(${-(y / rect.height) * 20}deg)`;
    card.style.transition = "transform 0.1s ease";
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
    cardRef.current.style.transition = "transform 0.4s ease";
  };

  return (
    <div className="hero_section outer">
      <div className="hero container">
        <div className="hero-left">
          <h3>Hi! I'm</h3>
          <h1>Tejasveer.</h1>
          <h2>A Fresher @IIT-BHU. I design and build things for the web.</h2>
          <p>
            I <span className="highlight">Love</span> turning mockups into
            Pixel-Perfect realities!
          </p>
          <div className="hero_btn">
            <button
              className="btn_project"
              onClick={() => window.open("#", "_blank")}
            >
              View Resume
            </button>
            <button
              className="btn_github"
              onClick={() =>
                window.open(
                  "https://github.com/tejasveersmatharu-debug",
                  "_blank",
                )
              }
            >
              GitHub
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div
            className="profile-card-wrapper"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src={pic} alt="Tejasveer" className="profile-pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
