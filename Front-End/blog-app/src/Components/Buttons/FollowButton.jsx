import React from "react";
import {RiUserFill, RiUserLine} from 'react-icons/ri'

function FollowButton({ isFollowing, followers, follow, unfollow }) {
  return     <>
  {isFollowing ? (
    <div
      onClick={unfollow}
      className="article-btn"
    >
      <RiUserFill size={"1.3rem"} />
      <span>Following</span>
      <span>{followers}</span>
    </div>
  ) : (
    <div
      onClick={follow}
      className="article-btn"
   >
      <RiUserLine size={"1.3rem"} />
      <span>Follow</span>
      <span>{followers}</span>
    </div>
  )}
</>
}

export default FollowButton;
