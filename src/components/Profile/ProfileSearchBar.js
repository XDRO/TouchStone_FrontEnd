import SoundWaves from "../../images/TouchStone-Sound-Waves.svg";
import React, { useState } from "react";
export const ProfileSearchBar = (onAddUserMessage, response) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    console.log(e.target.value);
  };

  // const onKeyDown={(e) => {
  //   if (e.key === "Enter")
  //       handlerFuntion();
  //   }}

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await onAddUserMessage({
        message,
      });
    } catch (error) {
      console.error("Error from handleSubmit in profileSearchBar :", error);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
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
          onChange={handleMessageChange}
          onKeyDown={onKeyDown}
        ></textarea>
        <button className="profile__searchbar-speach">
          {/* conditionally render sound waves or 
          submit button based on if text is in textarea */}
          <img src={SoundWaves} alt="Voice Commands"></img>
        </button>
      </div>
    </div>
  );
};
