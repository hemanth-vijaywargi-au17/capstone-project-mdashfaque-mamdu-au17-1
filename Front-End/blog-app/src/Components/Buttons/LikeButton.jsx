import React from "react";
import { AiFillLike, AiOutlineLike  } from "react-icons/ai";

function LikeButton({ like, unlike, isLiked, likes }) {
  return (
    <>
      {isLiked ? (
        <div onClick={unlike} className="article-btn">
          <AiFillLike size={"1.5rem"}/>
          <span>{likes}</span>
        </div>
      ) : (
        <div onClick={like} className="article-btn">
          <AiOutlineLike size={"1.5rem"}/>
          <span>{likes}</span>
        </div>
      )}
    </>
  );
}

export default LikeButton;
