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
  const [chatType, setChatType] = useState([]);

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
      setChatType((prevItems) => [...prevItems, userMessage]);

      const res = await generateResponse(token);
      setChatType((prevItems) => [...prevItems, res]);
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
        setChatType(
          items.map((items) => ({
            ...items,
          }))
        );
      })
      .catch((error) => {
        console.error("Error from useEffect getChats :", error);
      });
  }, [currentUser._id]);

  // later for summary will need useEffect to map values

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
            // use currentUser to get the values of the history chats
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            loggedIn={loggedIn}
            isLoggedIn={isLoggedIn}
            onAddUserMessage={onAddUserMessage}
            chatType={chatType}
            setChatType={setChatType}
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
