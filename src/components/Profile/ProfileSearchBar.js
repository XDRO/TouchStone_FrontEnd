import SubmitButton from "../../images/Submit-Button.svg";
import React, { useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// add code blocks for users inquireing about codiing
export const ProfileSearchBar = ({
  onAddUserMessage,
  activeChat,
  setActiveChatId,
}) => {
  const { currentUser } = React.useContext(CurrentUserContext);
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (message === "") {
        console.log("Please enter a message to send");
      } else {
        const res = await onAddUserMessage({
          chatId: activeChat?._id,
          text: message,
        });
        setActiveChatId(res._id);
      }

      setMessage("");
    } catch (error) {
      console.error("Error from handleSubmit in profileSearchBar :", error);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
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
              {currentUser?.name}
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
        <form>
          <input
            placeholder="Ask TouchStone:"
            className="profile__searchbar-text"
            onChange={handleMessageChange}
            onKeyDown={onKeyDown}
            value={message}
            // onSubmit={() =>
            //   handleSelectedChat(activeChat.find((chat) => chat?._id))
            // }
          ></input>
        </form>

        <button className="profile__searchbar-submit" type="submit">
          {/* conditionally render sound waves or 
          submit button based on if text is in textarea
          if message does not equal '' then send button else soundwaves */}
          <img
            className="profile__searchbar-submit-button"
            src={SubmitButton}
            alt="submit button"
            type="submit"
            onClick={handleSubmit}
          ></img>
        </button>
      </div>
    </div>
  );
};
