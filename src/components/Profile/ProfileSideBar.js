// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import NewChatButton from "../../images/TouchStone-NewChat.svg";
import DeleteButton from "../../images/delete.svg";
export const ProfileSideBar = ({
  chatList,
  setActiveChatId,
  handleSelectedChat,
  onClick,
}) => {
  const createNewChatList = (e) => {
    e.preventDefault();
    setActiveChatId(null);
  };

  return (
    <div className="profile__sidebar">
      {/* create animations for header on hover */}
      <div className="profile__sidebar-header">
        <p className="profile__sidebar-chat">Chat</p>
        <button className="profile__sidebar-edit">
          <img
            className="profile__sidebar-edit-button"
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
              <ol
                className="profile__sidebar-ol"
                key={index}
                onClick={() => handleSelectedChat(element)}
              >
                <li className="profile__sidebar-li_element" key={index}>
                  {element.messages[0].message.length > 10
                    ? element.messages[0].message.substring(0, 7) + "..."
                    : element.messages[0].message}
                </li>
                <img
                  onClick={() => onClick("delete")}
                  className="profile__sidebar-delete_button"
                  src={DeleteButton}
                  alt="Delete Button"
                ></img>
              </ol>
            );
          })}
        </span>
      </div>
    </div>
  );
};
