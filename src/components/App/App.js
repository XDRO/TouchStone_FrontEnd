import "./App.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
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
    <div>
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
