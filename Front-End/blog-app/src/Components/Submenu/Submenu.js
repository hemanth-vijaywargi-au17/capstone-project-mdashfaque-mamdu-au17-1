import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './submenu.css';
import { Link } from 'react-router-dom';
import { logout } from '../../Slices/userSlice';

const Submenu = ({ isActive, setIsActive }) => {
  const user = useSelector((state) => state.user);
  console.log(isActive);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive]);

  return (
    <div
      ref={dropdownRef}
      className={`menu ${isActive ? 'active' : 'inactive'}`}
    >
      <div className="profile-info">
        <img
          src={user.profilePicURL}
          alt={user.name}
          className="profile-picture-submenu"
        />
        <div className="name-email">
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="underline"></div>
      <div className="user-info">
        <ul>
          <li>
            <Link className="links-profile" to="/write">
              Write a story
            </Link>
          </li>

          <li>
            <Link className="links-profile" to="/profile">
              Design your profile
            </Link>
          </li>

          <li>
            <Link className="links-profile" to="/Help">
              Help
            </Link>
          </li>
          <li>
            <button
              className="links-profile"
              onClick={() => {
                dispatch(logout());
              }}
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Submenu;
