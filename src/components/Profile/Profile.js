import "./Profile.css";
import { ProfileSideBar } from "./ProfileSideBar";
import { ProfileSearchBar } from "./ProfileSearchBar";
export const Profile = ({
  onAddUserMessage,
  chatList,
  setChatList,
  handleSelectedChat,
  activeChat,
}) => {
  return (
    <div className="profile">
      <div className="profile__content">
        <ProfileSideBar
          chatList={chatList}
          setChatList={setChatList}
          handleSelectedChat={handleSelectedChat}
          onAddUserMessage={onAddUserMessage}
        />
        <ProfileSearchBar
          onAddUserMessage={onAddUserMessage}
          activeChat={activeChat}
        />
      </div>
    </div>
  );
};
