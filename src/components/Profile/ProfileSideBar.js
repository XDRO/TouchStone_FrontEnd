import { useState } from "react";
import NewChatButton from "../../images/TouchStone-NewChat.svg";
export const ProfileSideBar = ({ onAddUserMessage, chatType, setChatType }) => {
  const currentChatTitle = chatType[0]?.text;
  const [chatLists, setChatLists] = useState([]);
  // const [newChatTitle, setNewChatTitle] = useState("");

  // chat type objects
  // potentially use as the new chat object params
  // chatType : "message"
  // createdAt : "2024-06-15T22:45:33.538Z"
  // owner : "666784601d1e00031c5b9e02"
  // text : "what year is it"
  // __v : 0
  // _id : "666e198d4d57ecb1c23b829f"

  // chatType : "response"
  // createdAt : "2024-06-15T22:45:34.334Z"
  // owner : "666784601d1e00031c5b9e02"
  // text : "It is currently 2021."
  // __v : 0
  // _id : "666e198e4d57ecb1c23b82a2"

  const createNewChatList = async (e) => {
    try {
      e.preventDefault();
      const newChat = {};
      setChatLists(chatLists.concat(newChat));
    } catch (error) {
      console.log("Error from create new chat list", error);
    }
  };

  // const some function onClick <li></li> refocus onto chat
  // this event should show an empty chatType, setChatType([])
  // until populated by user OnAddUserMessage
  // then setChatType in onAddUserMessage should fire again

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

            {chatLists.map((_, index) => {
              return createNewChatList ? (
                <ol className="profile__sidebar-ol" key={index}>
                  <li className="profile__sidebar-li_element">
                    {/* {newChatTitle} */} new chat
                  </li>
                </ol>
              ) : null;
            })}
          </ol>
        </span>
      </div>
    </div>
  );
};
