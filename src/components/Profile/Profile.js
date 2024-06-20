import "./Profile.css";
import { ProfileSideBar } from "./ProfileSideBar";
import { ProfileSearchBar } from "./ProfileSearchBar";
export const Profile = ({
  onAddUserMessage,
  chatList,
  setChatList,
  currentUser,
  // selectedChat,
  // setSelectedChat,
  handleSelectedChat,
  activeChat,
}) => {
  return (
    <div className="profile">
      <div className="profile__content">
        <ProfileSideBar
          chatList={chatList}
          setChatList={setChatList}
          // selectedChat={selectedChat}
          // setSelectedChat={setSelectedChat}
          handleSelectedChat={handleSelectedChat}
        />
        <ProfileSearchBar
          onAddUserMessage={onAddUserMessage}
          chatList={chatList}
          currentUser={currentUser}
          activeChat={activeChat}
        />
      </div>
    </div>
  );
};
