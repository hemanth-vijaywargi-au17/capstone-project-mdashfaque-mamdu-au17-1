import React from "react";
import { AiFillLike, AiOutlineLike  } from "react-icons/ai";

function LikeButton({ like, unlike, isLiked, likes }) {
  return (
    <>
      {isLiked ? (
        <div onClick={unlike} className="flex items-center gap-1 cursor-pointer">
          <AiFillLike size={"1.5rem"}/>
          <span>{likes}</span>
        </div>
      ) : (
        <div onClick={like} className="flex items-center gap-1 cursor-pointer">
          <AiOutlineLike size={"1.5rem"}/>
          <span>{likes}</span>
        </div>
      )}
    </>
  );
}

export default LikeButton;
