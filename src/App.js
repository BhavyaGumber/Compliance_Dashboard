import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/signin&signup/SignIn";
import SignUp from "./components/signin&signup/SignUp";
import Home from "./components/homePage/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
