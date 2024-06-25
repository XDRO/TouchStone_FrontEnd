import NewChatButton from "../../images/TouchStone-NewChat.svg";
export const ProfileSideBar = ({
  chatList,
  setChatList,
  handleSelectedChat,
  onAddUserMessage,
  addMessageToList,
}) => {
  const createNewChatList = async (e) => {
    try {
      e.preventDefault();

      const newChat = {
        messages: [{ message: "", response: "" }],
      };

      console.log(newChat);
      setChatList([...chatList, newChat]);
    } catch (error) {
      console.log("Error from create new chat list", error);
    }
  };

  const handleAddMessage = () => {
    console.log(chatList);
    // working with array not object
    // addMessageToList({
    //   id: chatList._id,
    //   hasMessage: !chatList.hasMessage,
    // });

    const updatedChatList = addMessageToList([
      chatList._id,
      // !chatList.hasMessage,
    ]);

    setChatList([...chatList, updatedChatList]);
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
            return (
              <ol className="profile__sidebar-ol" key={index}>
                <li
                  className="profile__sidebar-li_element"
                  key={index}
                  onClick={() => handleSelectedChat(element)}
                  onDoubleClick={() => handleAddMessage(element)}
                >
                  {/* {element.messages.length > 0 && element.messages[0].message} */}
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
