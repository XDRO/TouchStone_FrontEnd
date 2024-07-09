import "./Profile.css";
import { ProfileSideBar } from "./ProfileSideBar";
import { ProfileSearchBar } from "./ProfileSearchBar";
export const Profile = ({
  onAddUserMessage,
  chatList,
  handleSelectedChat,
  activeChat,
  setActiveChatId,
  onClick,
}) => {
  return (
    <div className="profile">
      <div className="profile__content">
        <ProfileSideBar
          onClick={onClick}
          chatList={chatList}
          handleSelectedChat={handleSelectedChat}
          setActiveChatId={setActiveChatId}
        />
        <ProfileSearchBar
          onAddUserMessage={onAddUserMessage}
          activeChat={activeChat}
          setActiveChatId={setActiveChatId}
          handleSelectedChat={handleSelectedChat}
        />
      </div>
    </div>
  );
};
