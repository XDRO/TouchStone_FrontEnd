import "./Profile.css";
import { ProfileSideBar } from "./ProfileSideBar";
import { ProfileSearchBar } from "./ProfileSearchBar";
// import { ProfileResult } from "./ProfileResult";
export const Profile = ({ onAddUserMessage, chatType, currentUser }) => {
  return (
    <div className="profile">
      <div className="profile__content">
        <ProfileSideBar></ProfileSideBar>
        <ProfileSearchBar
          onAddUserMessage={onAddUserMessage}
          chatType={chatType}
          currentUser={currentUser}
        ></ProfileSearchBar>
      </div>
    </div>
  );
};
