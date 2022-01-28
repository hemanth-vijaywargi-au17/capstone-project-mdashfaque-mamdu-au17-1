import React from "react";
import {RiUserFill, RiUserLine} from 'react-icons/ri'

function FollowButton({ isFollowing, followers, follow, unfollow, size }) {
  return     <>
  {isFollowing ? (
    <button
      onClick={unfollow}
      className="border-none article-btn"
    >
      <RiUserFill size={size||"1.3rem"} />
      <span>Following</span>
      <span>{followers}</span>
    </button>
  ) : (
    <button
      onClick={follow}
      className="border-none article-btn"
   >
      <RiUserLine size={size||"1.3rem"} />
      <span>Follow</span>
      <span>{followers}</span>
    </button>
  )}
</>
}

export default FollowButton;
