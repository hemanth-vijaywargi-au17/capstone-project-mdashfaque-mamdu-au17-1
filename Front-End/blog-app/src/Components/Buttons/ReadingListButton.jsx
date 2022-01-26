import React from "react";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";

function ReadingListButton({ inList, remove, add, label }) {
  return (
    <>
      {inList ? (
        <div
          onClick={remove}
          className="article-btn"
        >
          <BsBookmarkFill size={"1.3rem"} />
          {label?<span className="hidden sm:block">Remove from Reading List</span>:null}
        </div>
      ) : (
        <div
          onClick={add}
          className="article-btn"
        >
          <BsBookmark size={"1.3rem"} />
          {label?<span className="hidden sm:block">Add To Reading List</span>:null}
        </div>
      )}
    </>
  );
}

export default ReadingListButton;
