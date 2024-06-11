import "./Profile.css";
import { ProfileSideBar } from "./ProfileSideBar";
import { ProfileSearchBar } from "./ProfileSearchBar";
import { ProfileResult } from "./ProfileResult";
export const Profile = ({ onAddUserMessage, response }) => {
  return (
    <div className="profile">
      {/* create sidebar.js for profile questions */}
      <div className="profile__content">
        <ProfileSideBar></ProfileSideBar>
        <ProfileSearchBar
          onAddUserMessage={onAddUserMessage}
          response={response}
        ></ProfileSearchBar>
        <ProfileResult></ProfileResult>
      </div>
    </div>
  );
};
