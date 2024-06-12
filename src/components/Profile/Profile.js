import "./Profile.css";
import { ProfileSideBar } from "./ProfileSideBar";
import { ProfileSearchBar } from "./ProfileSearchBar";
// import { ProfileResult } from "./ProfileResult";
export const Profile = ({ onAddUserMessage, responses, activeChat }) => {
  return (
    <div className="profile">
      <div className="profile__content">
        <ProfileSideBar></ProfileSideBar>
        <ProfileSearchBar
          onAddUserMessage={onAddUserMessage}
          responses={responses}
          // activeChat={activeChat}
        ></ProfileSearchBar>
      </div>
    </div>
  );
};
