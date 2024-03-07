import "./Profile.css";
import { ProfileSideBar } from "./ProfileSideBar";
import { ProfileSearchBar } from "./ProfileSearchBar";
export const Profile = () => {
  return (
    <div className="profile">
      {/* create sidebar.js for profile questions */}
      <div className="profile__content">
        <ProfileSideBar></ProfileSideBar>
        <ProfileSearchBar></ProfileSearchBar>
      </div>
    </div>
  );
};
