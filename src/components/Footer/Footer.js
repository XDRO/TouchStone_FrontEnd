import "./Footer.css";
import X from "../../images/twitter-x.svg";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__options">
        <div className="footer_about">About Us</div>
        <div className="footer_contact">Contact</div>
      </div>
      <img className="footer_X" src={X} alt="Twitter-X"></img>
    </footer>
  );
};
