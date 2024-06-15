import { useState } from "react";
import NewChatButton from "../../images/TouchStone-NewChat.svg";
export const ProfileSideBar = ({ onAddUserMessage, chatType, setChatType }) => {
  const currentChatTitle = chatType[0]?.text;
  const [newChatTitle, setNewChatTitle] = useState("");
  const [chatLists, setChatLists] = useState([]);

  const createNewChatList = async (e) => {
    try {
      e.preventDefault();
      setChatType([]);
      const newChat = {};
      setChatLists(chatLists.concat(newChat));
      setNewChatTitle();
      console.log(newChatTitle);
    } catch (error) {
      console.log("Error from create new chat list", error);
    }
  };

  // make chatType.map dependent on createNewChatList function
  // so it does not render new elements without the user clicking the new chat button

  return (
    <div className="profile__sidebar">
      {/* create animations for header on hover */}
      <div className="profile__sidebar-header">
        <p className="profile__sidebar-chat">Chat</p>
        <button className="profile__sidebar-edit">
          <img
            src={NewChatButton}
            alt="Add New Chat"
            onClick={createNewChatList}
          ></img>
        </button>
      </div>

      <div className="profile__sidebar-content">
        {/* add display: none if user has no history */}
        <span className="profile__sidebar-questions">
          {/* possibly add header for current dates */}
          <ol className="profile__sidebar-ol">
            <li className="profile__sidebar-li_element">{currentChatTitle}</li>

            {chatLists.map(() => {
              return createNewChatList ? (
                <li className="profile__sidebar-li_element">
                  {currentChatTitle}
                </li>
              ) : null;
            })}
          </ol>
        </span>
      </div>
    </div>
  );
};

// const createNewChatList = async () => {
//   try {
//     setNewChatArray((newChat) => [...newChat, chatType]);
//     console.log(newChatArray);
//   } catch (error) {
//     console.log("Error from create new chat list", error);
//   }
// };

// createProject() {
//   const item = this.state.itemArray;
//   const title = '';
//   const text = '';
//   item.push({ title, text })
//   this.setState({itemArray: item})
// }

// render() {
//   return (
//     <div className="Overview">
//       <p>Overview</p>
//       <button onClick={this.createProject.bind(this)}>New Project</button>
//       <Project />
//       <div>
//         {this.state.itemArray.map((item, index) => {
//           return (
//             <div className="box" key={index}>
//                 <div>
//                  <h2>{item.title}</h2>
//                  <p>{item.text}</p>
//                </div>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   );
// }
