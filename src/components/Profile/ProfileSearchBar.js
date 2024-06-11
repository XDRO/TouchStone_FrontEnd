import SoundWaves from "../../images/TouchStone-Sound-Waves.svg";
import React, { useState } from "react";
export const ProfileSearchBar = ({ ...props }) => {
  const [message, setMessage] = useState("");
  // use props.response.text to get openai response

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await props.onAddUserMessage({
        text: message,
      });

      const resultsForm = {
        response: props.response.text,
      };

      console.log(resultsForm);
      props.onSubmit(resultsForm);
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
      {/* get the result to render */}
      <div className="profile__searchbar-result"></div>

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
