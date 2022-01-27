// React
import React, { useEffect } from "react";
// React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import SignIn from "./Components/SignIn";
import Write from "./Components/Write";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Article from "./Components/Article/Article";
import { ToastContainer } from "react-toastify";
import ScrollToTop from './Components/ScrollToTop'
// Redux
import { useDispatch } from "react-redux";
import { actions } from "./Redux";
// CSS
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getUser());
    dispatch(actions.getAllUsers());
    dispatch(actions.getAllPosts());
  }, []);
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/article/:id" element={<Article />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
