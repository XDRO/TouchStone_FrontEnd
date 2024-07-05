import "./Profile.css";
import { ProfileSideBar } from "./ProfileSideBar";
import { ProfileSearchBar } from "./ProfileSearchBar";
export const Profile = ({
  onAddUserMessage,
  chatList,
  handleSelectedChat,
  activeChat,
  setActiveChatId,
}) => {
  return (
    <div className="profile">
      <div className="profile__content">
        <ProfileSideBar
          chatList={chatList}
          handleSelectedChat={handleSelectedChat}
          setActiveChatId={setActiveChatId}
        />
        <ProfileSearchBar
          onAddUserMessage={onAddUserMessage}
          activeChat={activeChat}
        />
      </div>
    </div>
  );
};
