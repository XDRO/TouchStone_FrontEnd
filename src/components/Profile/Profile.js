import "./Profile.css";
import { ProfileSideBar } from "./ProfileSideBar";
import { ProfileSearchBar } from "./ProfileSearchBar";
// import { ProfileResult } from "./ProfileResult";
export const Profile = ({
  onAddUserMessage,
  responses,
  messages,
  currentUser,
}) => {
  return (
    <div className="profile">
      <div className="profile__content">
        <ProfileSideBar></ProfileSideBar>
        <ProfileSearchBar
          onAddUserMessage={onAddUserMessage}
          responses={responses}
          currentUser={currentUser}
          messages={messages}
        ></ProfileSearchBar>
      </div>
    </div>
  );
};
