import "./Profile.css";
import { ProfileSideBar } from "./ProfileSideBar";
import { ProfileSearchBar } from "./ProfileSearchBar";
export const Profile = ({
  onAddUserMessage,
  chatList,
  setChatList,
  handleSelectedChat,
  activeChat,
  addMessageToList,
}) => {
  return (
    <div className="profile">
      <div className="profile__content">
        <ProfileSideBar
          chatList={chatList}
          setChatList={setChatList}
          handleSelectedChat={handleSelectedChat}
          onAddUserMessage={onAddUserMessage}
          addMessageToList={addMessageToList}
        />
        <ProfileSearchBar
          onAddUserMessage={onAddUserMessage}
          activeChat={activeChat}
        />
      </div>
    </div>
  );
};
