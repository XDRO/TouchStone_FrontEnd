import "./App.css";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { NothingFound } from "../NothingFoundWPreloader/NothingFound";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { Profile } from "../Profile/Profile";
// import { Register } from "../ModalRegister/ModalRegister";
// import { Login } from "../ModalLogin/ModalLogin";
// import { ModalDeleteItem } from "../ModalDeleteItem/ModalDeleteItem";
// import { ModalEditProfile } from "../ModalEditProfile/ModalEditProfile";

// put all consts, functions, and useEffects here
// return
// in return implement at least two routes
// here is what i believe i will need for routes
// Route path = "/" for Main
// Route path = "/register"
// Route path = "/login"
// Protected Route path = "/profile" w Profile inside

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header></Header>
          <Main></Main>
        </Route>
        <Route path="/profile">
          <Profile></Profile>
        </Route>
        <Route path="/nothingfound">
          <NothingFound></NothingFound>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
