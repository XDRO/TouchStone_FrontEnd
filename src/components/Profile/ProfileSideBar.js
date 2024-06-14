import NewChatButton from "../../images/TouchStone-NewChat.svg";
export const ProfileSideBar = ({ onAddUserMessage, chatType, currentUser }) => {
  const currentChat = chatType[0]?.text;

  return (
    <div className="profile__sidebar">
      {/* create onClick that takes user to new chat */}
      {/* create animations for header on hover */}
      <div className="profile__sidebar-header">
        <p className="profile__sidebar-chat">Chat</p>
        <button className="profile__sidebar-edit">
          <img src={NewChatButton} alt="Edit Chat"></img>
        </button>
      </div>

      <div className="profile__sidebar-content">
        {/* add display: none if user has no history */}
        <span className="profile__sidebar-questions">
          {/* possibly add header for current dates */}
          <ol className="profile__sidebar-ol">
            <li className="profile__sidebar-li_element">
              <div>
                {/* create Link to previous chats */}
                {currentChat}
              </div>
            </li>
          </ol>
          {/*  */}
          <ol className="profile__sidebar-ol">
            <li className="profile__sidebar-li_element">
              <div>
                {/* create Link to previous chats */}
                previous questions
              </div>
            </li>
          </ol>
        </span>
      </div>
    </div>
  );
};
