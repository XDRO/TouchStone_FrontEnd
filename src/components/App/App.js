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
import { generateResponse } from "../../utils/openaiapi";
import { postMessage, getChats } from "../../utils/api";
// import { ModalDeleteItem } from "../ModalDeleteItem/ModalDeleteItem";
// import { ModalEditProfile } from "../ModalEditProfile/ModalEditProfile";
// add new line
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [loggedIn, isLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [chatList, setChatList] = useState([]);

  const [chat, setChat] = useState([]); // profileSearchBar.js
  // The data behind this would also have to be an array, I think. A series of questions and responses
  // a Chat component, representing an individual chat.
  // the Chat component would need to map these messages
  const [selectedChat, setSelectedChat] = useState({});

  const token = localStorage.getItem("token");

  const handleOpenModal = (modalType) => {
    setActiveModal(modalType);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const onAddUserMessage = async (values) => {
    try {
      const userMessage = await postMessage(values, token);
      setChatList((prevItems) => [...prevItems, userMessage]);

      const res = await generateResponse(token);
      setChatList((prevItems) => [...prevItems, res]);
    } catch (error) {
      console.log("Error from onAddUserMessage: ", error, error.message);
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
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
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
