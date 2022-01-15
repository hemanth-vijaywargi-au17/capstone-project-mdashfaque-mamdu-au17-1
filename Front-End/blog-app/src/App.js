import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./Components/SignIn";
import Write from "./Components/Write";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import { getUser } from "./Slices/userSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/write" element={<Write />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
