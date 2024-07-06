import "./Footer.css";
import X from "../../images/twitter-x.svg";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
export const Footer = ({ onClick }) => {
  return (
    <footer className="footer">
      <div className="footer__options">
        <div onClick={() => onClick("about")} className="footer_about">
          About Us
        </div>
        <div onClick={() => onClick("contact")} className="footer_contact">
          Contact
        </div>
        <div className="footer_X">
          <img className="footer_X" src={X} alt="Twitter-X"></img>
        </div>
      </div>

      {/* <Link to="https://twitter.com/?lang=en"> */}
      {/* </Link> */}
      {/* if logged in add headphones vector */}
    </footer>
  );
};
