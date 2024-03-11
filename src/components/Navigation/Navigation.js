import "./Navigation.css";
export const Navigation = () => {
  return (
    <div className="navigation">
      {/* Currently navigation__content is not being used in css */}
      <div className="navigation__content">
        <div className="navigation__options">
          <button className="navigation__options-discover">
            Discover your new assistant
          </button>
          <button className="navigation__options-start">Get started</button>
        </div>
      </div>
    </div>
  );
};
