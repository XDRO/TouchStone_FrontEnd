import "./Main.css";
import TSBackGround from "../../images/TouchStone-LandingPage-Background.svg";

export const Main = () => {
  return (
    <main className="main">
      <div className="main__content">
        <img
          className="main__content main__content-background"
          src={TSBackGround}
          alt="background"
        ></img>
      </div>
    </main>
  );
};
