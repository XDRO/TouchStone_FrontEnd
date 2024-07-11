import "./Footer.css";
import X from "../../images/twitter-x.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export const Footer = ({ onClick, loggedIn, isLoggedIn }) => {
  // create function to logout
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    isLoggedIn(false);
    history.push("/");
  };

  return (
    <footer className="footer">
      <div className="footer__options">
        <div onClick={() => onClick("about")} className="footer_about">
          About
        </div>
        <div onClick={() => onClick("contact")} className="footer_contact">
          Contact
        </div>
        {loggedIn ? (
          <div className="footer_logout" onClick={handleLogout}>
            Logout
          </div>
        ) : null}

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
