import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { BsBookmarks } from "react-icons/bs";
import "./navbar.css";
import { logout } from "../../Slices/userSlice";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()

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
                />
                <button className="link" onClick={()=>{dispatch(logout())}}>
                  Sign Out
                </button>
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
