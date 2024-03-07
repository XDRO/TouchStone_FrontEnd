import "./Main.css";
// import TSBackGround from "../../images/TouchStone-LandingPage-Background-no-round.svg";
export const Main = () => {
  return (
    <main className="main">
      <div className="main__content">
        {/* potentailly turn this into a sidebar.js inside of main folder */}
        <div className="main__options">
          <button className="main__options-discover">
            Discover your new assistant
          </button>
          <button className="main__options-start">Get started</button>
        </div>
      </div>
    </main>
  );
};
