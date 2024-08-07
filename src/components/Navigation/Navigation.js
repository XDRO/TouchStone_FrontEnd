import "./Navigation.css";
export const Navigation = ({ onClick }) => {
  return (
    <div className="navigation">
      {/* Currently navigation__content is not being used in css */}
      <div className="navigation__content">
        <div className="navigation__options">
          <button
            onClick={() => onClick("discover")}
            className="navigation__options-discover"
          >
            Discover your new assistant
          </button>
          <button
            onClick={() => onClick("register")}
            className="navigation__options-start"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};
