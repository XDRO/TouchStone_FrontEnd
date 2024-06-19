import "./Profile.css";
import { ProfileSideBar } from "./ProfileSideBar";
import { ProfileSearchBar } from "./ProfileSearchBar";
export const Profile = ({
  onAddUserMessage,
  chatList,
  setChatList,
  currentUser,
  selectedChat,
  setSelectedChat,
}) => {
  return (
    <div className="profile">
      <div className="profile__content">
        <ProfileSideBar
          chatList={chatList}
          setChatList={setChatList}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />
        <ProfileSearchBar
          onAddUserMessage={onAddUserMessage}
          chatList={chatList}
          currentUser={currentUser}
        />
      </div>
    </div>
  );
};
