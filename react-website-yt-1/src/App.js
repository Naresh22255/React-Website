import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Switch />
        <Route path="/" />
      </Router>
      
    </>
  );
}

export default App;
