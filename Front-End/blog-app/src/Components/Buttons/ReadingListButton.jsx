import React from "react";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";

function ReadingListButton({ inList, remove, add, label }) {
  return (
    <>
      {inList ? (
        <div
          onClick={remove}
          className="flex items-center cursor-pointer  gap-2 text-xs shadow p-2"
        >
          <BsBookmarkFill size={"1rem"} />
          {label?<span>Remove from Reading List</span>:null}
        </div>
      ) : (
        <div
          onClick={add}
          className="flex items-center cursor-pointer  gap-2 text-xs shadow p-2"
        >
          <BsBookmark size={"1rem"} />
          {label?<span>Add To Reading List</span>:null}
        </div>
      )}
    </>
  );
}

export default ReadingListButton;
