import React from "react";
import {RiUserFill, RiUserLine} from 'react-icons/ri'

function FollowButton({ isFollowing, followers, follow, unfollow }) {
  return     <>
  {isFollowing ? (
    <div
      onClick={unfollow}
      className="flex items-center cursor-pointer  gap-2 text-xs"
    >
      <RiUserFill size={"1.5rem"} />
      <span>Unfollow</span>
      <span>{followers}</span>
    </div>
  ) : (
    <div
      onClick={follow}
      className="flex items-center cursor-pointer  gap-2 text-xs"
    >
      <RiUserLine size={"1.5rem"} />
      <span>Follow</span>
      <span>{followers}</span>
    </div>
  )}
</>
}

export default FollowButton;
