// React
import React, { useState } from "react";
// Components
import DropDownMenu from "../DropDownMenu";
// Redux
import { useDispatch, useSelector } from "react-redux";
// React Router
import { Link } from "react-router-dom";
// React Icons
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { BsBookmarks } from "react-icons/bs";
// CSS
import "./navbar.css";
import { actions } from "../../Redux";

const Navbar = () => {
  const user = useSelector((state) => state.app.user);
  const dispatch = useDispatch();

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
            {user.email && (
              <BsBookmarks className="bookmark-icon"></BsBookmarks>
            )}
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
              <DropDownMenu
                menuButton={
                  <img
                    className="profile-picture"
                    src={`${user.profilePicURL}`}
                    alt={`${user.name}`}
                  />
                }
              >
                <div className="profile-info">
                  <h4 className="">{user.name}</h4>
                  <p className="">{user.email}</p>
                </div>
                <div className="underline"></div>
                <div className="user-info">
                  <Link className="custom-links-profile" to="/write">
                    Write a story
                  </Link>

                  <Link className="custom-links-profile" to="/profile">
                    Design your profile
                  </Link>

                  <Link className="custom-links-profile" to="/Help">
                    Help
                  </Link>

                  <button
                    className="custom-links-profile sign-out-btn"
                    onClick={() => {
                      dispatch(actions.logOut());
                    }}
                  >
                    Sign Out
                  </button>
                </div>
              </DropDownMenu>
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
