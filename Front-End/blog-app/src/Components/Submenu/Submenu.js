import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './submenu.css';
const Submenu = () => {
  const user = useSelector((state) => state.user);
  console.log(user.name[0]);
  return (
    <div className="submenu">
      <div className="profile-info">
        <img
          src={user.profilePicURL}
          alt={user.name}
          className="profile-picture"
        />
        <div className="name-email">
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Submenu;
