import { useState, useEffect } from "react";
import NewChatButton from "../../images/TouchStone-NewChat.svg";
// import { getChats } from "../../utils/api";
export const ProfileSideBar = ({ onAddUserMessage, chatList, setChatList }) => {
  const currentChatTitle = chatList[0]?.text;

  const [chat, setChat] = useState(() => {
    const savedChats = localStorage.getItem("chat");
    return savedChats ? JSON.parse(savedChats) : [];
  });

  const createNewChatList = async (e) => {
    try {
      e.preventDefault();

      setChat([
        ...chat,
        {
          id: chat.length,
          value: chat,
        },
      ]);
    } catch (error) {
      console.log("Error from create new chat list", error);
    }
  };

  // const handleListItemClick = (index) => {
  //   setChat();
  // };

  useEffect(() => {
    localStorage.setItem("chat", JSON.stringify(chat));
  }, [chat]);

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

            {chat.map((element, index) => {
              return createNewChatList ? (
                <ol className="profile__sidebar-ol" key={index}>
                  <li
                    key={index}
                    className="profile__sidebar-li_element"
                    // onClick={handleListItemClick}
                  ></li>
                </ol>
              ) : (
                { element }
              );
            })}
          </ol>
        </span>
      </div>
    </div>
  );
};
