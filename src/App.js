import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/NoteState";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";
import './components/login.css'

function App() {
 
 
  return (
    <>
    <NoteState>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      </div>
      <Footer/>
      </NoteState>
    </>

  );
}

export default App;