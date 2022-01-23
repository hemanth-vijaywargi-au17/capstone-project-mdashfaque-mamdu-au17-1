import React from "react";

function LikeButton({ like, unlike, isLiked, likes }) {
  return (
    <>
      {isLiked ? (
        <>
          <button onClick={unlike}>Unlike</button>
          <div>{likes}</div>
        </>
      ) : (
        <>
          <button onClick={like}>Like</button>
          <div>{likes}</div>
        </>
      )}
    </>
  );
}

export default LikeButton;
