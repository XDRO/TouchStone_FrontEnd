import "./Profile.css";
import { ProfileSideBar } from "./ProfileSideBar";
import { ProfileSearchBar } from "./ProfileSearchBar";
export const Profile = ({ onAddUserMessage, chatList, currentUser }) => {
  return (
    <div className="profile">
      <div className="profile__content">
        <ProfileSideBar chatList={chatList} />
        <ProfileSearchBar
          onAddUserMessage={onAddUserMessage}
          chatList={chatList}
          currentUser={currentUser}
        />
      </div>
    </div>
  );
};
