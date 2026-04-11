import myLogo from "../images/logo.png";
const Header = () => {
  return (
    <div className="outer_header">
      <div className="container header">
        <div className="logo">
          <img src={myLogo} />
        </div>

        <div className="links">
          <ul className="header_ul">
            <li className="header_li">
              <a href="#example">Projects</a>
            </li>
            <li className="header_li">
              <a href="#about-sec">About</a>
            </li>
            <li className="header_li">
              <a href="#about-sec">Skills</a>
            </li>
            <li className="header_li">
              <a href="#contact-sec">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
