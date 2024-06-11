import SoundWaves from "../../images/TouchStone-Sound-Waves.svg";
import React, { useState } from "react";
export const ProfileSearchBar = ({ onAddUserMessage, response }) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    console.log(e.target.value);
  };

  // const handleSubmit = async (e) => {
  //   try {
  //     e.preventDefault();
  //     console.log("onAddUserMessage :", onAddUserMessage);
  //     await onAddUserMessage();
  //   } catch (error) {
  //     console.error("Error from handleSubmit in profileSearchBar :", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("onAddUserMessage:", onAddUserMessage); // Log the prop to ensure it's being received correctly
      if (typeof onAddUserMessage === "function") {
        await onAddUserMessage();
      } else {
        console.error("onAddUserMessage is not a function");
      }
    } catch (error) {
      console.error("Error from handleSubmit in ProfileSearchBar:", error);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
      console.log("Enter Key Press");
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
