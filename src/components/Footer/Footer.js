import "./Footer.css";
import X from "../../images/twitter-x.svg";
export const Footer = ({ onClick }) => {
  return (
    <footer className="footer">
      <div className="footer__options">
        <div onClick={() => onClick("about")} className="footer_about">
          About
        </div>
        <div onClick={() => onClick("contact")} className="footer_contact">
          Contact
        </div>

        <div className="footer_X">
          <a href="https://twitter.com/?lang=en">
            <img className="footer_X" src={X} alt="Twitter-X"></img>
          </a>
        </div>
      </div>

      {/* if logged in add headphones vector */}
    </footer>
  );
};
