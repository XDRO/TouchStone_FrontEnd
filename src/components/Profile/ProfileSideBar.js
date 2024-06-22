import NewChatButton from "../../images/TouchStone-NewChat.svg";
import React, { useState } from "react";
export const ProfileSideBar = ({
  chatList,
  setChatList,
  handleSelectedChat,
  onAddUserMessage,
}) => {
  const [message, setMessage] = useState("");
  const createNewChatList = async (e) => {
    try {
      e.preventDefault();
      await onAddUserMessage({ text: message });

      // await onAddUserMessage({}).then populate newChat object with data from server,
      // until then create new list element with no data
      // const userMessage = await onAddUserMessage({ text: message });
      // console.log(userMessage);

      const newChat = {
        text: message,
        // messages: [
        //   { message: userMessage.message, response: userMessage.response },
        // ],
      };

      console.log(newChat);
      setChatList([...chatList, newChat]);
      setMessage("");
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
            // console.log(element);
            return (
              <ol className="profile__sidebar-ol" key={index}>
                <li
                  className="profile__sidebar-li_element"
                  key={index}
                  onClick={() => handleSelectedChat(element)}
                >
                  {/* TypeError: Cannot read properties of undefined (reading 'message') */}
                  {element.messages[0].message}
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

// {/* {element.name.length > 10
//   ? element.name.substring(0, 7) + "..."
//   : element.name} */}

// {selectedChat.map((element, index) => {
//   return (
//     <ol className="profile__sidebar-ol" key={index}>
//       <li className="profile__sidebar-li_element" key={index}>
//         {element.text.length > 10
//           ? element.text.substring(0, 7) + "..."
//           : element.text}
//       </li>
//       {/* add delete button */}
//     </ol>
//   );
// })}

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
