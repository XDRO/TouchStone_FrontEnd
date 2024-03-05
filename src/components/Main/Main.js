import "./Main.css";
import TSBackGround from "../../images/TouchStone-LandingPage-Background.svg";

export const Main = () => {
  return (
    <main className="main">
      <div className="main__background">
        <img src={TSBackGround} alt="background"></img>
      </div>
    </main>
  );
};
