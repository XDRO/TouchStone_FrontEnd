import NewChatButton from "../../images/TouchStone-NewChat.svg";
// import { useEffect, useState } from "react";
export const ProfileSideBar = ({
  chatList,
  setChatList,
  handleSelectedChat,
  onAddUserMessage,
  activeChat,
}) => {
  const createNewChatList = async (e) => {
    try {
      e.preventDefault();

      const newChat = {
        chatId: activeChat?._id,
        messages: [{ message: "", response: "" }],
      };
      // setChatList((prevItems) => [...prevItems, newChat]);

      const updatedChat = {
        ...newChat,
        chatId: "12345",
        messages: [{ message: "hello", response: "How may I assist you?" }],
      };

      setChatList((prevItems) => [...prevItems, updatedChat]);

      console.log("chatList", chatList);
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
          {chatList?.map((element, index) => {
            return (
              <ol className="profile__sidebar-ol" key={index}>
                <li
                  className="profile__sidebar-li_element"
                  key={index}
                  onClick={() => handleSelectedChat(element)}
                >
                  {element?.messages?.length > 0 &&
                    element?.messages[0]?.message}
                </li>
                {/* add delete button */}
              </ol>
            );
          })}
        </span>
      </div>
    </div>
  );
};
// use below to limit chat title length
// {/* {element.name.length > 10
//   ? element.name.substring(0, 7) + "..."
//   : element.name} */}

// use to save and get chats on the frontend
// const [chat, setChat] = useState(() => {
//   const savedChats = localStorage.getItem("chat");
//   return savedChats ? JSON.parse(savedChats) : [];
// });

// useEffect(() => {
//   localStorage.setItem("chat", JSON.stringify(chat));
// }, [chat]);
