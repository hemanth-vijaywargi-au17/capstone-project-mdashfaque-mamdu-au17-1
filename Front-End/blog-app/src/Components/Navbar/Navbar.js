// React
import React, { useState } from "react";
// Components
import Submenu from "../Submenu/Submenu";
// Redux
import { useSelector } from "react-redux";
// React Router
import { Link } from "react-router-dom";
// React Icons
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { BsBookmarks } from "react-icons/bs";
// CSS
import "./navbar.css";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  // const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const openSubmenu = (e) => {
    setIsActive(!isActive);
  };

  // const handleSubmenu = () => {
  //   setIsSubmenuOpen(false);
  // };

  return (
    <div className="blog__navbar">
      <div className="blog__navbar-links">
        <div className="blog__navbar-links__logo">
          <Link to="/">
            <div className="blog__brand">DEV.BLOG</div>
          </Link>
        </div>
        <div className="blog__navbar-container">
          <div className="blog__navbar-links-container">
            {user.email ? (
              <Link className="link" to="/write">
                Write
              </Link>
            ) : null}
          </div>
          <div className="blog__navbar-get-started">
            {user.email && <BsSearch></BsSearch>}
            {user.email && <BsBookmarks></BsBookmarks>}
            {user.email ? (
              <IoIosNotificationsOutline
                className="icons"
                size={25}
              ></IoIosNotificationsOutline>
            ) : (
              <Link className="link" to="/signin">
                Sign in
              </Link>
            )}

            {user.profilePicURL ? (
              <>
                <img
                  className="profile-picture"
                  src={`${user.profilePicURL}`}
                  alt={`${user.name}`}
                  onClick={openSubmenu}
                />
                {isActive && (
                  <Submenu isActive={isActive} setIsActive={setIsActive} />
                )}
                {/* <button
                  className="link"
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  Sign Out
                </button> */}
              </>
            ) : (
              <Link to="/signin">
                <button className="get-started-btn" type="button">
                  Get started
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
