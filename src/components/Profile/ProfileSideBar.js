// import { useState, useEffect } from "react";
import NewChatButton from "../../images/TouchStone-NewChat.svg";
export const ProfileSideBar = ({ chatList }) => {
  const createNewChatList = async (e) => {
    try {
      e.preventDefault();
      // When you click the button on the sidebar, I guess you'd
      // add a new chat to chatList. The title would initially be empty

      // setSelectedChat to this newly added chat
      // selectedChat would then be used to populate the right of the page, I imagine
      console.log("event fired");
    } catch (error) {
      console.log("Error from create new chat list", error);
    }
  };

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
        <span className="profile__sidebar-questions">
          {chatList.map((element, index) => {
            return createNewChatList && element.chatType === "message" ? (
              <ol className="profile__sidebar-ol" key={index}>
                <li className="profile__sidebar-li_element" key={index}>
                  {element.text.length > 10
                    ? element.text.substring(0, 7) + "..."
                    : element.text}
                </li>
                {/* add delete button */}
              </ol>
            ) : null;
          })}
        </span>
      </div>
    </div>
  );
};

// const [chat, setChat] = useState(() => {
//   const savedChats = localStorage.getItem("chat");
//   return savedChats ? JSON.parse(savedChats) : [];
// });

// const handleListItemClick = (index) => {
//   setChatList([]);
// };

// useEffect(() => {
//   localStorage.setItem("chat", JSON.stringify(chat));
// }, [chat]);

// {/* {chat.map((element, index) => {
//   return createNewChatList ? (
//     <ol className="profile__sidebar-ol" key={index}>
//       <li
//         key={index}
//         className="profile__sidebar-li_element"
//         onClick={handleListItemClick}
//       ></li>
//     </ol>
//   ) : null;
// })} */}
