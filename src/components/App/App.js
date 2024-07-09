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
import { postMessage, getChats, deleteMessage } from "../../utils/api";
import { ModalDeleteItem } from "../ModalDeleteItem/ModalDeleteItem";
// import { ModalEditProfile } from "../ModalEditProfile/ModalEditProfile";
// add new line
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [loggedIn, isLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [chatList, setChatList] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);

  const token = localStorage.getItem("token");

  const handleSelectedChat = (chat) => {
    setActiveChatId(chat._id);
  };

  const handleOpenModal = (modalType) => {
    setActiveModal(modalType);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const onAddUserMessage = async (values) => {
    try {
      const userMessage = await postMessage(values, token);
      const messageData = userMessage.messageData;

      setChatList((prevItems) => {
        const matchingChat = prevItems.find(
          (chat) => chat._id === messageData._id
        );
        if (matchingChat) {
          return prevItems.map((chat) =>
            chat._id === messageData._id ? messageData : chat
          );
        } else {
          return [...prevItems, messageData];
        }
      });
      return messageData;
    } catch (error) {
      console.log("Error from onAddUserMessage: ", error, error.message);
    }
  };

  const handleDeleteMessage = async () => {
    try {
      await deleteMessage(activeChatId, token);
      setChatList((prevItems) =>
        prevItems.filter((item) => item._id !== activeChatId)
      );
      setActiveModal("");
    } catch (error) {
      console.log("Error from handleDeleteMessage: ", error, error.message);
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
            onClick={handleOpenModal}
            loggedIn={loggedIn}
            isLoggedIn={isLoggedIn}
            onAddUserMessage={onAddUserMessage}
            chatList={chatList}
            setChatList={setChatList}
            handleSelectedChat={handleSelectedChat}
            activeChat={chatList.find((chat) => chat?._id === activeChatId)}
            setActiveChatId={setActiveChatId}
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
      {activeModal === "delete" && (
        <ModalDeleteItem
          handleCloseModal={handleCloseModal}
          handleDeleteMessage={handleDeleteMessage}
        />
      )}
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
