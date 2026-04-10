import "./Projects";
const Body = () => {
  return (
    <div className="hero_section outer">
      <div className="hero container">
        <div className="hero-left">
          <h3>Hi! I'm</h3>
          <h1>Tejasveer.</h1>
          <h2>I'm a Frontend developer, and a student @IIT-BHU</h2>
          <p>
            I create clean, responsive web-apps, and{" "}
            <span className="highlight">Love</span> turning ideas into reality!
          </p>
          <div className="hero_btn">
            <button
              className="btn_project"
              onClick={() => {
                document.getElementById("example").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              View Projects
            </button>

            <button
              className="btn_github"
              onClick={() => {
                window.open(
                  "https://github.com/tejasveersmatharu-debug",
                  "_blank",
                );
              }}
            >
              GitHub
            </button>
          </div>
        </div>
        <div className="hero-right">
          <img src="/profile.jpg" alt="Tejasveer" />
        </div>
      </div>
    </div>
  );
};
export default Body;
