// React
import React, { useRef, useEffect } from 'react';
// React Router
import { Link } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Redux';
// CSS
import './submenu.css';

const Submenu = ({ isActive, setIsActive }) => {
  const user = useSelector((state) => state.app.user);
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
          <h4 className="user-name">{user.name}</h4>
          <p className="user-email">{user.email}</p>
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
            dispatch(actions.logOut());
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Submenu;
