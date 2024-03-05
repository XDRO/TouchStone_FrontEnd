import logo from "../../logo.svg";
import "./App.css";

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
