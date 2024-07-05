import NewChatButton from "../../images/TouchStone-NewChat.svg";
export const ProfileSideBar = ({
  chatList,
  setActiveChatId,
  handleSelectedChat,
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
