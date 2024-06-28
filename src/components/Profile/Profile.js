import "./Profile.css";
import { ProfileSideBar } from "./ProfileSideBar";
import { ProfileSearchBar } from "./ProfileSearchBar";
export const Profile = ({
  onAddUserMessage,
  chatList,
  setChatList,
  handleSelectedChat,
  activeChat,
  onAddMessageToChat,
}) => {
  return (
    <div className="profile">
      <div className="profile__content">
        <ProfileSideBar
          chatList={chatList}
          setChatList={setChatList}
          handleSelectedChat={handleSelectedChat}
          // where do I want to add message to chat?
        />
        <ProfileSearchBar
          onAddUserMessage={onAddUserMessage}
          activeChat={activeChat}
          // where do I want to add message to chat?
        />
      </div>
    </div>
  );
};
