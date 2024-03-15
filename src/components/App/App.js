import "./App.css";
import {
  Switch,
  Route,
  withRouter,
} from "react-router-dom/cjs/react-router-dom.min";
import { NothingFound } from "../NothingFoundWPreloader/NothingFound";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { Profile } from "../Profile/Profile";
import { Register } from "../ModalRegister/ModalRegister";
import { Login } from "../ModalLogin/ModalLogin";
// import { ModalDeleteItem } from "../ModalDeleteItem/ModalDeleteItem";
// import { ModalEditProfile } from "../ModalEditProfile/ModalEditProfile";
// import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import React, { useState } from "react";

// put all consts, functions, and useEffects here
// return
// in return implement at least two routes
// here is what i believe i will need for routes
// Route path = "/" for Main
// Route path = "/register"
// Route path = "/login"
// Protected Route path = "/profile" w Profile inside

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleOpenModal = (modalType) => {
    setActiveModal(modalType);
    console.log(modalType);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main onClick={handleOpenModal} />
        </Route>

        {activeModal === "register" && (
          <Route path="/register">
            <Register />
          </Route>
        )}

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/nothingfound">
          <NothingFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
