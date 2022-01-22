import React from "react";

function LikeButton({ like, unlike, isLiked }) {
  return (
    <>
      {isLiked ? (
        <button onClick={unlike}>Unlike</button>
      ) : (
        <button onClick={like}>Like</button>
      )}
    </>
  );
}

export default LikeButton;
