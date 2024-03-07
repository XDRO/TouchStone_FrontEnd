import EditButton from "../../images/TouchStone-Edit-Questions.svg";
export const ProfileSideBar = () => {
  return (
    <div className="profile__sidebar">
      {/* create onClick that takes user to new chat */}
      {/* create animations for header on hover */}
      <div className="profile__sidebar-header">
        <p className="profile__sidebar-chat">Chat</p>
        <button className="profile__sidebar-edit">
          <img src={EditButton} alt="Edit Chat"></img>
        </button>
      </div>

      <div className="profile__sidebar-content">
        <span className="profile__sidebar-quesitons">
          <ol className="profile__sidebar-ol">
            <li className="profile__sidebar-li_element">
              <div>
                {/* create Link to previous chats */}
                current question
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
