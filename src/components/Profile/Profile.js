import "./Profile.css";
import { ProfileSideBar } from "./ProfileSideBar";
import { ProfileSearchBar } from "./ProfileSearchBar";
import { ProfileResult } from "./ProfileResult";
export const Profile = () => {
  return (
    <div className="profile">
      {/* create sidebar.js for profile questions */}
      <div className="profile__content">
        <ProfileSideBar></ProfileSideBar>
        <ProfileSearchBar></ProfileSearchBar>
        <ProfileResult></ProfileResult>
      </div>
    </div>
  );
};
