import "./Main.css";
import { Navigation } from "../Navigation/Navigation";
export const Main = ({ onClick }) => {
  return (
    <main className="main">
      <div className="main__content">
        <Navigation onClick={() => onClick("register")} />
      </div>
    </main>
  );
};
