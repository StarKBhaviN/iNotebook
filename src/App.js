// import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./Context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState  } from "react";
import Profile from "./components/Profile";

function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div >
            <Routes>
              <Route exact path="/Home" element={<Home showAlert={showAlert} />} />
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/About" element={<About />} />
              <Route exact path="/Login" element={<Login showAlert={showAlert} />} />
              <Route exact path="/SignUp" element={<SignUp showAlert={showAlert} />} />
              <Route exact path="/Profile" element={<Profile showAlert={showAlert} />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
