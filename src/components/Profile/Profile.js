import "./Profile.css";
import { ProfileSideBar } from "./ProfileSideBar";
import { ProfileSearchBar } from "./ProfileSearchBar";
// import { ProfileResult } from "./ProfileResult";
export const Profile = ({
  onAddUserMessage,
  chatList,
  currentUser,
  setChatList,
}) => {
  return (
    <div className="profile">
      <div className="profile__content">
        <ProfileSideBar
          onAddUserMessage={onAddUserMessage}
          chatList={chatList}
          setChatList={setChatList}
        ></ProfileSideBar>
        <ProfileSearchBar
          onAddUserMessage={onAddUserMessage}
          chatList={chatList}
          currentUser={currentUser}
        ></ProfileSearchBar>
      </div>
    </div>
  );
};
