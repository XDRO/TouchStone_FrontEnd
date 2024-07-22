import TSLogo from "../../images/TSLogo.svg";
import "./Header.css";
export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={TSLogo} alt="TS Logo"></img>
        <p className="header__title">TouchStone AI</p>
      </div>
    </header>
  );
};
