import "./App.css";
import {
  Switch,
  Route,
  withRouter,
} from "react-router-dom/cjs/react-router-dom.min";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Preloader } from "../../Preloader/Preloader";
import { NothingFound } from "../NothingFoundWPreloader/NothingFound";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { Profile } from "../Profile/Profile";
import { Register } from "../ModalRegister/ModalRegister";
import { Login } from "../ModalLogin/ModalLogin";
import { ModalContact } from "../ModalContact/ModalContact";
import { ModalAbout } from "../ModalAbout/ModalAbout";
import { ModalDiscover } from "../ModalDiscover/ModalDiscover";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import React, { useEffect, useState } from "react";
import * as auth from "../../utils/auth";
import { postMessage, getChats, addMessageToChat } from "../../utils/api";
// import { ModalDeleteItem } from "../ModalDeleteItem/ModalDeleteItem";
// import { ModalEditProfile } from "../ModalEditProfile/ModalEditProfile";
// add new line
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [loggedIn, isLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [chatList, setChatList] = useState([]);
  const [activeChat, setActiveChat] = useState(null);

  // const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  const handleSelectedChat = (chat) => {
    console.log(chat);

    setActiveChat(chat);
  };

  // const handleMessageChange = (e) => {
  //   setMessage(e.target.value);
  // };

  const handleOpenModal = (modalType) => {
    setActiveModal(modalType);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const onAddUserMessage = async (values) => {
    try {
      const userMessage = await postMessage(values, token);
      // setActiveChat((prevItems) => [...prevItems, userMessage]);
      setChatList((prevItems) => [...prevItems, userMessage.messageData]);
      // if (userMessage.messageData._id) {
      const matchingChat = chatList.find(
        (chat) => chat._id === userMessage.messageData._id
      );
      // debugger;
      if (matchingChat) {
        setChatList(
          chatList.map((chat) => {
            return chat._id === userMessage.messageData._id
              ? userMessage.messageData
              : chat;
          })
        );
      } else {
        setChatList((prevItems) => [...prevItems, userMessage.messageData]);
      }
      setActiveChat(userMessage.messageData);
      // }
      console.log(userMessage);
      console.log(chatList);
    } catch (error) {
      console.log("Error from onAddUserMessage: ", error, error.message);
    }
  };

  const onAddMessageToChat = async (values, token) => {
    try {
      // const message = await onAddUserMessage(values, token);
      await addMessageToChat(values, token);
      const updateChatList = await addMessageToChat(values, token);
      console.log(values, "Value from onAddMessageToChat", token, "Token");
      setChatList((prevItems) => [...prevItems, updateChatList]);
    } catch (error) {
      console.log(error, "Error from onAddMessageToChat: ", error.message);
    }
  };

  useEffect(() => {
    if (token) {
      setIsLoading(true);
      auth
        .checkToken(token)
        .then((userData) => {
          setCurrentUser(userData);
          isLoggedIn(true);
          handleCloseModal("register");
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [loggedIn, token]);

  useEffect(() => {
    getChats()
      .then((items) => {
        setChatList(
          items.map((items) => ({
            ...items,
          }))
        );
      })
      .catch((error) => {
        console.error("Error from useEffect getChats :", error);
      });
  }, [currentUser._id]);

  return isLoading ? (
    <Preloader />
  ) : (
    <CurrentUserContext.Provider
      value={{ setCurrentUser, currentUser }}
      path="/profile"
    >
      <Switch>
        <Route exact path="/">
          <Header />
          <Main onClick={handleOpenModal} />
        </Route>

        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          redirect={() => handleOpenModal("register")}
        >
          <Profile
            loggedIn={loggedIn}
            isLoggedIn={isLoggedIn}
            onAddUserMessage={onAddUserMessage}
            chatList={chatList}
            setChatList={setChatList}
            handleSelectedChat={handleSelectedChat}
            activeChat={activeChat}
            onAddMessageToChat={onAddMessageToChat}
          />
        </ProtectedRoute>

        <Route path="/nothingfound">
          <NothingFound />
        </Route>
      </Switch>
      <Footer onClick={handleOpenModal} />
      {activeModal === "register" && (
        <Register
          handleCloseModal={handleCloseModal}
          onClick={handleOpenModal}
          isLoggedIn={isLoggedIn}
          setCurrentUser={setCurrentUser}
        />
      )}
      {activeModal === "login" && (
        <Login
          handleCloseModal={handleCloseModal}
          onClick={handleOpenModal}
          isLoggedIn={isLoggedIn}
        />
      )}
      {activeModal === "contact" && (
        <ModalContact handleCloseModal={handleCloseModal} />
      )}
      {activeModal === "about" && (
        <ModalAbout handleCloseModal={handleCloseModal} />
      )}
      {activeModal === "discover" && (
        <ModalDiscover handleCloseModal={handleCloseModal} />
      )}
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
