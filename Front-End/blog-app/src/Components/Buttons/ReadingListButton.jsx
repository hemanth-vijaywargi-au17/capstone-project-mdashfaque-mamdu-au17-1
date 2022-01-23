import React from "react";

function ReadingListButton({ inList, remove, add }) {
  return (
    <>
      {inList ? (
        <>
          <button onClick={remove}>Remove from Reading List</button>
        </>
      ) : (
        <>
          <button onClick={add}>Add To Reading List</button>
        </>
      )}
    </>
  );
}

export default ReadingListButton;
