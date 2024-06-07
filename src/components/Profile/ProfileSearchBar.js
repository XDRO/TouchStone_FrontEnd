import SoundWaves from "../../images/TouchStone-Sound-Waves.svg";
import React, { useState } from "react";
export const ProfileSearchBar = (onAddUserMessage, response) => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="profile__searchbar">
      <div className="profile__searchbar-content">
        <textarea
          placeholder="Ask TouchStone:"
          className="profile__searchbar-text"
          rows={1}
          cols={30}
          onSubmit={handleSubmit}
        ></textarea>
        <button className="profile__searchbar-speach">
          <img src={SoundWaves} alt="Voice Commands"></img>
        </button>
      </div>
    </div>
  );
};
