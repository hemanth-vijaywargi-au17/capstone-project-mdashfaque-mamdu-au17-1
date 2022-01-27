import React from 'react';
import './userprofile.css';

const UserProfileCard = () => {
  return (
    <div className="container__user__profile">
      <h2 className="user__name">Hemanth Ashfaque</h2>
      <div className="profile__info">
        <button className="follow__btn">Follow</button>
        <p className="number__followers">100 Followers</p>
      </div>
    </div>
  );
};

export default UserProfileCard;
