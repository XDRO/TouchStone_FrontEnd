import SoundWaves from "../../images/TouchStone-Sound-Waves.svg";
import React, { useState } from "react";

export const ProfileSearchBar = ({
  onAddUserMessage,
  responses,
  currentUser,
}) => {
  const [message, setMessage] = useState("");
  const [localMessages, setLocalMesssages] = useState(responses);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await onAddUserMessage({ text: message });
      setMessage("");
    } catch (error) {
      console.error("Error from handleSubmit in profileSearchBar :", error);
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
      <div className="profile__searchbar-result" key={responses._id}>
        {responses.map((element) =>
          element.chatType === "response" ? (
            <div className="profile__searchbar-message_container">
              TouchStone AI:
              <div className="profile__searchbar-result_text">
                {element.text}
              </div>
            </div>
          ) : (
            <div className="profile__searchbar-message_container">
              {currentUser.name} :
              <div className="profile__searchbar-message_text">
                {element.text}
              </div>
            </div>
          )
        )}
      </div>

      <div className="profile__searchbar-content">
        {/* possibly change textarea to input with the 
      type="text", if done restyle */}
        <textarea
          placeholder="Ask TouchStone:"
          className="profile__searchbar-text"
          onSubmit={handleSubmit}
          onChange={handleMessageChange}
          onKeyDown={onKeyDown}
          value={message}
        ></textarea>
        <button className="profile__searchbar-speach">
          {/* conditionally render sound waves or 
          submit button based on if text is in textarea
          if message does not equal '' then send button else soundwaves */}
          <img src={SoundWaves} alt="Voice Commands"></img>
        </button>
      </div>
    </div>
  );
};
