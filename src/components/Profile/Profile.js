import "./Profile.css";
import { ProfileSideBar } from "./ProfileSideBar";
export const Profile = () => {
  return (
    <div className="profile">
      {/* create sidebar.js for profile questions */}
      <div className="profile__content">
        <ProfileSideBar></ProfileSideBar>
      </div>
    </div>
  );
};
