import { useState } from "react";
import NewChatButton from "../../images/TouchStone-NewChat.svg";
export const ProfileSideBar = ({ onAddUserMessage, chatList, setChatList }) => {
  const currentChatTitle = chatList[0]?.text;
  const [chat, setChat] = useState([]);

  const createNewChatList = async (e) => {
    try {
      e.preventDefault();
      const newChat = {};
      setChat(chat.concat(newChat));
    } catch (error) {
      console.log("Error from create new chat list", error);
    }
  };

  // const some function onClick <li></li> refocus onto chat
  // this event should show an empty chatList, setChatList([])
  // until populated by user OnAddUserMessage
  // then setChatList in onAddUserMessage should fire again

  return (
    <div className="profile__sidebar">
      {/* create animations for header on hover */}
      <div className="profile__sidebar-header">
        <p className="profile__sidebar-chat">Chat</p>
        <button className="profile__sidebar-edit">
          <img
            src={NewChatButton}
            alt="Add New Chat"
            onClick={createNewChatList}
          ></img>
        </button>
      </div>

      <div className="profile__sidebar-content">
        {/* add display: none if user has no history */}
        <span className="profile__sidebar-questions">
          {/* possibly add header for current dates */}
          <ol className="profile__sidebar-ol">
            <li className="profile__sidebar-li_element">{currentChatTitle}</li>

            {chat.map((_, index) => {
              return createNewChatList ? (
                <ol className="profile__sidebar-ol" key={index}>
                  <li className="profile__sidebar-li_element"></li>
                </ol>
              ) : null;
            })}
          </ol>
        </span>
      </div>
    </div>
  );
};
