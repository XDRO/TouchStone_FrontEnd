import "./NothingFound.css";
import { Preloader } from "../../Preloader/Preloader";
// import link to main
export const NothingFound = () => {
  return (
    <div className="nothing__found">
      <p className="nothing__found-header">
        I don't know what you did to get here, but it looks like you're lost
      </p>
      <p className="nothing__found-text">
        Don't worry click here to return home
      </p>
      <Preloader></Preloader>
    </div>
  );
};
