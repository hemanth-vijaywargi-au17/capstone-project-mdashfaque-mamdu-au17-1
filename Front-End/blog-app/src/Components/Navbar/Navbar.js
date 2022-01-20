import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import { BsBookmarks } from 'react-icons/bs';
import './navbar.css';
import Submenu from '../Submenu/Submenu';

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const [isActive, setIsActive] = useState(false);

  const openSubmenu = (e) => {
    setIsActive(!isActive);
  };

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
