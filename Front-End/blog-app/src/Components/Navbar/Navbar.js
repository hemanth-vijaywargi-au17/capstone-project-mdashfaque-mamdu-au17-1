import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import { BsBookmarks } from 'react-icons/bs';
import './navbar.css';

const Navbar = () => {
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <div className="blog__navbar">
      <div className="blog__navbar-links">
        <div className="blog__navbar-links__logo">
          <Link to="/">
            <h2>DEV.BLOG</h2>
          </Link>
        </div>
        <div className="blog__navbar-container">
          <div className="blog__navbar-links-container">
            {!user.email && (
              <Link className="link" to="/membership">
                Membership
              </Link>
            )}

            {!user.email && (
              <Link className="link" to="/write">
                Write
              </Link>
            )}
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
              <img
                className="profile-picture"
                src={`${user.profilePicURL}`}
                alt={`${user.name}`}
              />
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
