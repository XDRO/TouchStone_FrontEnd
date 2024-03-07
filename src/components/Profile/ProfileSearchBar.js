import SoundWaves from "../../images/TouchStone-Sound-Waves.svg";
export const ProfileSearchBar = () => {
  return (
    <div className="profile__searchbar">
      <div className="profile__searchbar-content">
        <textarea
          placeholder="Ask TouchStone:"
          className="profile__searchbar-text"
          rows={1}
          cols={30}
        ></textarea>
        <button className="profile__searchbar-speach">
          <img src={SoundWaves} alt="Voice Commands"></img>
        </button>
      </div>
    </div>
  );
};
