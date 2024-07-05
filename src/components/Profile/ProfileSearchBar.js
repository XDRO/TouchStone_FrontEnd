import SoundWaves from "../../images/TouchStone-Sound-Waves.svg";
import React, { useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// add code blocks for users inquireing about codiing
export const ProfileSearchBar = ({ onAddUserMessage, activeChat }) => {
  const { currentUser } = React.useContext(CurrentUserContext);
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await onAddUserMessage({ chatId: activeChat?._id, text: message });
      setMessage("");
    } catch (error) {
      console.error("Error from handleSubmit in profileSearchBar :", error);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="profile__searchbar">
      <div className="profile__searchbar-chatType_container">
        {activeChat?.messages.map((element, index) => {
          return (
            <div className="profile__searchbar-chatList" key={index}>
              {currentUser.name}
              <div className="profile__searchbar-chatType_text">
                {element.message}
              </div>
              TouchStone AI:
              <div className="profile__searchbar-chatType_text">
                {element.response}
              </div>
            </div>
          );
        })}
      </div>

      <div className="profile__searchbar-content">
        {/* possibly change textarea to <input></input> with the 
      type="text", if done restyle */}
        <form>
          <input
            placeholder="Ask TouchStone:"
            className="profile__searchbar-text"
            onSubmit={handleSubmit}
            onChange={handleMessageChange}
            onKeyDown={onKeyDown}
            value={message}
          ></input>
        </form>

        <button className="profile__searchbar-speach" type="submit">
          {/* conditionally render sound waves or 
          submit button based on if text is in textarea
          if message does not equal '' then send button else soundwaves */}
          <img src={SoundWaves} alt="Voice Commands"></img>
        </button>
      </div>
    </div>
  );
};
