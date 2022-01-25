import React from "react";
import {RiUserFill, RiUserLine} from 'react-icons/ri'

function FollowButton({ isFollowing, followers, follow, unfollow }) {
  return     <>
  {isFollowing ? (
    <div
      onClick={unfollow}
      className="flex items-center cursor-pointer  gap-2 text-xs shadow p-2"
    >
      <RiUserFill size={"1.3rem"} />
      <span>Unfollow</span>
      <span>{followers}</span>
    </div>
  ) : (
    <div
      onClick={follow}
      className="flex items-center cursor-pointer  gap-2 text-xs shadow p-2"
    >
      <RiUserLine size={"1.3rem"} />
      <span>Follow</span>
      <span>{followers}</span>
    </div>
  )}
</>
}

export default FollowButton;
