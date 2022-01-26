// React
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// React Router
import { useNavigate } from "react-router-dom";
import { actions } from "../../Redux";
import ReadingListButton from "../Buttons/ReadingListButton";

function ArticleCard(props) {
  const {
    author: author_id,
    title,
    summary,
    thumbnailURL,
    tags,
    date,
    _id,
  } = props;
  const author = useSelector((state) => state.app.allUsers[author_id]);
  const {
    user: { readingList },
  } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    /* Article Card */
    <div
      className="
      grid w-full p-4 gap-2 font-sans cursor-pointer border-b-2 border-x-0 border-t-0 border-solid  border-gray-200 active:bg-gray-100 box-border
      sm:grid-cols-3 md:gap-4 md:w-11/12 lg:w-4/6 xl:w-3/6"
      onClick={() => {
        navigate(`/article/${_id}`);
      }}
    >
      {/* Image Box */}
      <div
        className="order-1 flex items-center 
      sm:order-2 sm:col-span-1"
      >
        <img
          src={thumbnailURL}
          alt=""
          className="object-cover w-full h-40 rounded"
        />
      </div>

      {/* Text Data */}
      <div
        className="
      order-2 flex flex-col gap-2 justify-between
      sm:order-1 sm:col-span-2"
      >
        {/* User Image and Name */}
        <div className="flex items-center gap-2">
          <img
            src={author.profilePicURL}
            alt=""
            className="w-6 h-6 rounded-full"
          />
          <div className="text-sm font-semibold capitalize">{author.name}</div>
        </div>
        {/* Title */}
        <div className="font-bold text-lg sm:text-xl md:text-2xl">{title}</div>
        {/* Summary */}
        <div className=" text-gray-600 text-base line-clamp-2">{summary}</div>

        <div
          className="text-sm text-gray-600 flex items-center justify-between"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex items-center gap-2">
            {/* Date */}
            <div className="bg-gray-100 rounded-lg p-1 px-2">
              {date.toLocaleDateString(undefined, { month: "short" })}{" "}
              {date.getDate()}, {date.getFullYear()}
            </div>
            {/* Category */}
            <div className="bg-gray-100 rounded-lg p-1 px-2">
              {tags.length !== 0 ? tags[0] : null}
            </div>
          </div>

          {/* Three Dot Menu */}
          <ReadingListButton
            inList={readingList.includes(_id)}
            add={() => {
              dispatch(actions.addToReadingList(_id));
            }}
            remove={() => {
              dispatch(actions.removeFromReadingList(_id));
            }}
            label={false}
          />
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
