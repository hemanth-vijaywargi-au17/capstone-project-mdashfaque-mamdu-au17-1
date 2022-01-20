import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './submenu.css';
import { Link } from 'react-router-dom';
import { logout } from '../../Slices/userSlice';

const Submenu = ({ isActive, setIsActive }) => {
  const user = useSelector((state) => state.user);

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
      className={`custom-menu ${isActive ? 'active' : 'inactive'}`}
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
            dispatch(logout());
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Submenu;
