import React from "react";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";

function ReadingListButton({ inList, remove, add }) {
  return (
    <>
      {inList ? (
        <div
          onClick={remove}
          className="flex items-center cursor-pointer  gap-2 text-xs"
        >
          <BsBookmarkFill size={"1.5rem"} />
          <span>Remove from Reading List</span>
        </div>
      ) : (
        <div
          onClick={add}
          className="flex items-center cursor-pointer  gap-2 text-xs"
        >
          <BsBookmark size={"1.5rem"} />
          <span>Add To Reading List</span>
        </div>
      )}
    </>
  );
}

export default ReadingListButton;
